import { db } from "./firebase";
import { collection, getDocs, query } from "firebase/firestore";

export async function getAllBlocks() {
  let q = query(collection(db, "blocks"));
  const res = await getDocs(q);

  console.log(
    res.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    })
  );
}
