import { db } from "@/firebaseConfig";
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const dbDelete = (path: string) => {
  if (typeof path !== "string" || !path.trim()) {
    console.error("dbDelete: invalid path", path);
    return;
  }

  const [collectionName, documentId, fieldName] = path
    .split("/")
    .filter(Boolean);

  (async () => {
    try {
      if (collectionName && !documentId) {
        const snapshot = await getDocs(collection(db, collectionName));
        await Promise.all(snapshot.docs.map((d) => deleteDoc(d.ref)));
        console.log("collection deleted");
      } else if (collectionName && documentId && !fieldName) {
        await deleteDoc(doc(db, collectionName, documentId));
        console.log("document deleted");
      } else if (collectionName && documentId && fieldName) {
        await updateDoc(doc(db, collectionName, documentId), {
          [fieldName]: deleteField(),
        });
        console.log("field deleted");
      } else {
        console.error("invalid path:", path);
      }
    } catch (err) {
      console.error("delete failed:", err);
    }
  })();
};
