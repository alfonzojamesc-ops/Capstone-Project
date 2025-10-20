import { db } from "@/firebaseConfig";
import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";

export function dbDeleteDoc(path: string) {
  (async () => {
    try {
      if (typeof path !== "string" || !path.trim()) {
        console.error("[Delete Document] Invalid path:", path);
        return;
      }

      const parts = path.split("/").filter(Boolean);
      if (parts.length % 2 !== 0) {
        console.error(
          "[Delete Document] Path does not resolve to a document:",
          path
        );
        return;
      }

      // @ts-expect-error
      const docRef = doc(db, ...parts);
      await deleteDoc(docRef);

      console.log(`[Delete Document] Deleted document: ${path}`);
    } catch (error) {
      console.error(`[Delete Document] Failed to delete "${path}":`, error);
    }
  })();
}

export function dbDeleteField(path: string) {
  (async () => {
    try {
      const parts = path.split("/");
      if (parts.length < 3 || parts.length % 2 === 0) {
        throw new Error(`[Delete Field] Invalid path: ${path}`);
      }

      const fieldName = parts.pop()!;
      const docPath = parts.join("/");

      const docRef = doc(db, docPath);
      await updateDoc(docRef, { [fieldName]: deleteField() });

      console.log(
        `[Delete Field] Deleted field '${fieldName}' from '${docPath}'`
      );
    } catch (error) {
      console.error(
        `[Delete Field] Failed to delete field at '${path}':`,
        error
      );
    }
  })();
}
