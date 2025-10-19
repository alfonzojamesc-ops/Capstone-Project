import { db } from "@/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

type Slot = Record<string, any>;
type Block = {
  description?: string;
  slots: Record<string, Slot>;
};
export type DBData = {
  blocks: Record<string, Block>;
};

const deepClone = <T,>(obj: T): T => JSON.parse(JSON.stringify(obj));
const deepEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

async function fetchDB(): Promise<DBData> {
  const blocksSnap = await getDocs(collection(db, "blocks"));
  const blocks: Record<string, Block> = {};

  for (const blockDoc of blocksSnap.docs) {
    const blockId = blockDoc.id;
    const blockData = blockDoc.data() as Omit<Block, "slots">;

    const slotsSnap = await getDocs(collection(db, "blocks", blockId, "slots"));
    const slots: Record<string, Slot> = {};
    slotsSnap.forEach((slotDoc) => {
      slots[slotDoc.id] = slotDoc.data() as Slot;
    });

    blocks[blockId] = { ...blockData, slots };
  }

  return { blocks };
}

export async function dbWrite(
  mutator: (data: DBData) => void | Promise<void>,
  overwrite = false
): Promise<void> {
  const original = await fetchDB();
  const data = deepClone(original);

  await mutator(data);

  const updates: Promise<any>[] = [];

  for (const [blockId, newBlock] of Object.entries(data.blocks)) {
    const oldBlock = original.blocks[blockId] || { slots: {} };
    const { slots: newSlots, ...newInfo } = newBlock;
    const { slots: oldSlots, ...oldInfo } = oldBlock;

    if (!deepEqual(newInfo, oldInfo)) {
      updates.push(
        setDoc(doc(db, "blocks", blockId), newInfo, { merge: !overwrite })
      );
    }

    for (const [slotId, newSlot] of Object.entries(newSlots || {})) {
      const oldSlot = oldSlots?.[slotId];
      if (!deepEqual(newSlot, oldSlot)) {
        updates.push(
          setDoc(doc(db, "blocks", blockId, "slots", slotId), newSlot, {
            merge: true,
          })
        );
      }
    }
  }

  await Promise.all(updates);
  console.log(`Firestore updated (${updates.length} changes)`);
}
