import { db } from "@/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
//////////////////////////////////////////////////////////////////////////////////
// DBMS Read /////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// overloads for dx
export async function dbRead(path: string): Promise<DocumentData | null>;
export async function dbRead(
  path: string
): Promise<Record<string, DocumentData | null>>;

export async function dbRead(path: string) {
  const processName = "[DBMS Read]";

  const parts = parsePath(path, "Read");

  if (parts.length === 0) {
    console.error(`${processName} Empty path`);
    return null;
  }

  try {
    if (isCollectionPath(parts, path, processName)) {
      // if odd, guaranteed collection
      // @ts-expect-error
      const snapshot = await getDocs(collection(db, ...parts));
      const docsObj: Record<string, DocumentData | null> = {};
      snapshot.docs.forEach((d) => (docsObj[d.id] = d.data()));
      return docsObj;
    } else {
      // and non-collections are guaranteed to be a document
      // @ts-expect-error
      const snap = await getDoc(doc(db, ...parts));
      return snap.exists() ? snap.data() : null;
    }
  } catch (err) {
    console.error(`${processName} Failed:`, path, err);

    return parts.length % 2 === 0 ? null : {};
  }
}
//////////////////////////////////////////////////////////////////////////////////
// DBMS Write ////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export async function dbWrite(path: string, data: Record<string, any>) {
  const processName = "[DBMS Write]";

  const parts = parsePath(path, processName);

  if (isCollectionPath(parts, path, processName)) {
    console.error(
      `${processName} Invalid path (must be even segments): ${path}`
    );
    return;
  }

  // @ts-expect-error
  const ref = doc(db, ...parts);

  try {
    await setDoc(ref, data, { merge: true });
    console.log(`${processName} Succeed:`, path, data);
  } catch (err) {
    console.error(`${processName} Failed:`, path, err);
  }
}
//////////////////////////////////////////////////////////////////////////////////
// DBMS Delete ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export async function dbDelete(
  path: string,
  subcollectionNames: string[] = []
) {
  const processName = "[DBMS Delete]";

  const parts = parsePath(path, processName);

  try {
    if (isCollectionPath(parts, path, processName)) {
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

    console.log(`${processName} Success:`, path);
  } catch (err) {
    console.error(`${processName} Failed:`, path, err);
  }
}
//////////////////////////////////////////////////////////////////////////////////
// DBMS Path-Helpers /////////////////////////////////////////////////////////////
// DBMS Path-Parser //////////////////////////////////////////////////////////////
function parsePath(path: string, at: string) {
  const processName = "[DBMS Path-Parser]";

  const parts = path.split("/").filter(Boolean);

  if (parts.length === 0 || !parts.length)
    console.error(`${processName} @ ${at} Invalid path: ${path}`);

  return parts;
}
// DBMS Path-Identifier //////////////////////////////////////////////////////////
function isCollectionPath(parts: string[], path: string, at: string) {
  const processName = "[DBMS Path-Identifier]";

  // odd = collection, even = document
  const result = parts.length % 2 !== 0;

  console.log(
    `${processName} @ ${at} ${
      result ? "Collection" : "Document"
    } path evaluated @ ${path}`
  );

  return result;
}
// TODO: caching system for offline functionality
// TODO: conflict resolution logic
