import { db } from "@/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
//////////////////////////////////////////////////////////////////////////////////
// Read Document /////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export async function dbReadDoc(path: string) {
  const parts = path.split("/").filter(Boolean);

  if (parts.length % 2 !== 0) {
    console.error(
      `[DBMS Read-Document] Invalid path (must be even segments): ${path}`
    );
    return null;
  }

  // @ts-expect-error
  const ref = doc(db, ...parts);

  try {
    const snap = await getDoc(ref);
    if (snap.exists()) {
      console.log(`[DBMS Read-Document] Succeed: ${path}`, snap.data());
      return snap.data();
    } else {
      console.warn(`[DBMS Read-Document] Missing:  ${path}`);
      return null;
    }
  } catch (err) {
    console.error(`[DBMS Read-Document] Failed: ${path}`, err);
    return null;
  }
}
//////////////////////////////////////////////////////////////////////////////////
// Read Collection ///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export async function dbReadCol(path: string) {
  const parts = path.split("/").filter(Boolean);

  // @ts-expect-error Firestore collection path
  const colRef = collection(db, ...parts);

  try {
    const snapshot = await getDocs(colRef);
    const docs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    console.log(`[DBMS Read-Collection] Succeed: ${path}:`, docs);
    return docs;
  } catch (err) {
    console.error(`[DBMS Read-Collection] Failed: ${path}`, err);
    return [];
  }
}
//////////////////////////////////////////////////////////////////////////////////
// Write /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export async function dbWrite(path: string, data: Record<string, any>) {
  const parts = path.split("/").filter(Boolean);

  if (parts.length % 2 !== 0) {
    console.error(`[DBMS Write] Invalid path (must be even segments): ${path}`);
    return;
  }

  // @ts-expect-error
  const ref = doc(db, ...parts);
  try {
    await setDoc(ref, data, { merge: true });
    console.log(`[DBMS Write] Succeed: ${path}`, data);
  } catch (err) {
    console.error(`[DBMS Write] Failed: ${path}`, err);
  }
}
//////////////////////////////////////////////////////////////////////////////////
// Delete ////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export async function dbDelete(
  path: string,
  subcollectionNames: string[] = []
) {
  const parts = path.split("/").filter(Boolean);
  if (!parts.length) return console.error("[DBMS Delete] Invalid path:", path);

  try {
    if (parts.length % 2 !== 0) {
      // Collection path
      // @ts-expect-error
      const colRef = collection(db, ...parts);
      const snapshot = await getDocs(colRef);
      for (const docSnap of snapshot.docs) {
        await dbDelete(`${path}/${docSnap.id}`, subcollectionNames);
      }
    } else {
      // Document path
      // @ts-expect-error
      const docRef = doc(db, ...parts);
      for (const sub of subcollectionNames) {
        await dbDelete(`${path}/${sub}`, subcollectionNames);
      }
      await deleteDoc(docRef);
    }

    console.log(`[DBMS Delete] Success: ${path}`);
  } catch (err) {
    console.error("[DBMS Delete] Failed:", path, err);
  }
}
// TODO: caching system for offline functionality
// TODO: conflict resolution logic