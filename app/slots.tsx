import { SafeArea } from "@/components/safe-area";
import SlotList from "@/components/slots/slot-list";
import SlotListHeader from "@/components/slots/slots-header";
import { sampleData } from "@/constants/sample-data";
import { useLocalSearchParams } from "expo-router";

export default function Slot() {
  const { block } = useLocalSearchParams();
  const blockData = sampleData.blocks.find((b) => b.id === block);

  if (!blockData) return null;

  return (
    <SafeArea>
      <SlotListHeader blockId={blockData.id} />
      <SlotList block={blockData} />
    </SafeArea>
  );
}
