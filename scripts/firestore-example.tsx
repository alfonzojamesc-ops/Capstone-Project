import { db } from "@/firebaseConfig";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

// export async function addData() {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// export async function addMoreData() {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Alan",
//       middle: "Mathison",
//       last: "Turing",
//       born: 1912,
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

export async function addData() {
  const setId = "a1";
  try {
    const docRef = await setDoc(doc(db, "slots-a", setId), {
      id: setId,
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    });

    console.log("Document written with ID:", setId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function readCollection() {
  const querySnapshot = await getDocs(collection(db, "slots-a"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

export async function readDocument() {
  const getId = "a2";
  const docRef = doc(db, "slots-a", getId); // path: collection + document ID
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}
