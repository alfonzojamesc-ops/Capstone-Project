import { db } from "@/firebaseConfig";
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export function dbDelete(path: string, subcollectionNames: string[] = []) {
  (async () => {
    try {
      if (typeof path !== "string" || !path.trim()) {
        console.error("[DBMS Delete] Invalid path:", path);
        return;
      }

      const parts = path.split("/").filter(Boolean);
      const lastIndex = parts.length - 1;

      // Even-length => document
      if (parts.length % 2 === 0) {
        await dbDeleteDoc(path, subcollectionNames);
        return;
      }

      // Odd-length => collection or field
      // Case 1: non-last odd index => guaranteed collection
      if (parts.length < 3) {
        await dbDeleteCollection(path, subcollectionNames);
        return;
      }

      // Case 2: last odd index => check if field or collection
      const fieldName = parts[lastIndex];
      const parentPath = parts.slice(0, -1).join("/");

      // parent must be a document path
      if (parts.length % 2 === 1) {
        const parentParts = parts.slice(0, -1);
        if (parentParts.length % 2 === 0) {
          // @ts-expect-error
          const parentRef = doc(db, ...parentParts);
          const parentSnap = await getDoc(parentRef);

          if (
            parentSnap.exists() &&
            parentSnap.data()?.hasOwnProperty(fieldName)
          ) {
            await dbDeleteField(path);
            return;
          }
        }
      }

      // assume it's a collection
      await dbDeleteCollection(path, subcollectionNames);

      console.log(`[DBMS Delete] Delete operation on path '${path}' success'`);
    } catch (error) {
      console.error("[DBMS Delete] Failed to delete:", path, error);
    }
  })();
}

// helpers
export function dbDeleteField(path: string) {
  (async () => {
    try {
      const parts = path.split("/");
      if (parts.length < 3 || parts.length % 2 === 0) {
        throw new Error(`[DBMS Delete Field] Invalid path: ${path}`);
      }

      const fieldName = parts.pop()!;
      const docPath = parts.join("/");

      const docRef = doc(db, docPath);
      await updateDoc(docRef, { [fieldName]: deleteField() });

      console.log(
        `[DBMS Delete Field] Deleted field '${fieldName}' from '${docPath}'`
      );
    } catch (error) {
      console.error(
        `[DBMS Delete Field] Failed to delete field at '${path}':`,
        error
      );
    }
  })();
}

export function dbDeleteDoc(path: string, subcollectionNames: string[] = []) {
  (async () => {
    try {
      if (typeof path !== "string" || !path.trim()) {
        console.error("[DBMS Delete Document] Invalid path:", path);
        return;
      }

      const parts = path.split("/").filter(Boolean);
      if (parts.length % 2 !== 0) {
        console.error(
          "[DBMS Delete Document] Path does not resolve to a document:",
          path
        );
        return;
      }

      // @ts-expect-error
      const docRef = doc(db, ...parts);

      for (const subcolName of subcollectionNames) {
        await deleteSubcollection(`${path}/${subcolName}`, subcollectionNames);
      }

      await deleteDoc(docRef);
      console.log(
        `[DBMS Delete Document] Deleted document and its subcollections: ${path}`
      );
    } catch (error) {
      console.error(
        `[DBMS Delete Document] Failed to delete "${path}":`,
        error
      );
    }
  })();
}

async function deleteSubcollection(subcollectionPath, subcollectionNames) {
  try {
    const colRef = collection(db, subcollectionPath);
    const snapshot = await getDocs(colRef);

    for (const docSnap of snapshot.docs) {
      const subDocPath = `${subcollectionPath}/${docSnap.id}`;
      await dbDeleteDoc(subDocPath, subcollectionNames);
    }
  } catch (error) {
    console.error(
      `[DBMS Delete Subcollection] Failed to delete subcollection "${subcollectionPath}":`,
      error
    );
  }
}

export function dbDeleteCollection(
  path: string,
  subcollectionNames: string[] = []
) {
  (async () => {
    try {
      if (typeof path !== "string" || !path.trim()) {
        console.error("[DBMS Delete Collection] Invalid path:", path);
        return;
      }

      const parts = path.split("/").filter(Boolean);
      if (parts.length % 2 === 0) {
        console.error(
          "[DBMS Delete Collection] Path does not resolve to a collection:",
          path
        );
        return;
      }

      // @ts-expect-error
      const colRef = collection(db, ...parts);
      const snapshot = await getDocs(colRef);

      if (snapshot.empty) {
        console.log(`[DBMS Delete Collection] No documents in: ${path}`);
        return;
      }

      console.log(
        `[DBMS Delete Collection] Deleting ${snapshot.size} docs from: ${path}`
      );

      for (const docSnap of snapshot.docs) {
        const docPath = `${path}/${docSnap.id}`;
        await dbDeleteDoc(docPath, subcollectionNames);
      }

      console.log(`[DBMS Delete Collection] Finished deleting: ${path}`);
    } catch (error) {
      console.error(
        `[DBMS Delete Collection] Failed to delete "${path}":`,
        error
      );
    }
  })();
}
