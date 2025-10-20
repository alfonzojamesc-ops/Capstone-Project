import { db } from "@/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const dbWrite = (data, merge = true) => {
  (async () => {
    const writeRecursively = async (refPath, obj) => {
      for (const [key, value] of Object.entries(obj)) {
        const nextPath = [...refPath, key];
        if (typeof value === "object" && !Array.isArray(value)) {
          // @ts-expect-error
          const isDoc = Object.values(value).every(
            (v) => typeof v !== "object" || Array.isArray(v)
          );

          if (isDoc) {
            // @ts-expect-error
            await setDoc(doc(db, ...nextPath), value, { merge: merge });
          } else {
            await writeRecursively(nextPath, value);
          }
        } else {
          // @ts-expect-error
          const docRef = doc(db, ...refPath);
          await setDoc(docRef, { [key]: value }, { merge: merge });
        }
      }
    };

    try {
      await writeRecursively([], data);
      console.log("[DBMS Write] Write operations succeed");
      console.dir(data, { depth: null });
    } catch (error) {
      console.error("[DBMS Write] Write operations failed", error);
      console.dir(data, { depth: null });
    }
  })();
};
