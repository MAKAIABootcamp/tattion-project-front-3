import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase";
import { useState } from "react";

const collectionName = "stylestattoos";
// const stylestattoosCollection = collection(db, collectionName);

// export const getStylestattoosCollection = () => {
//     const [stylestattoos, setStylestattoos] = useState([]);
//     const q = query(collection(db, "stylestattoos"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         let stylestattoosArr = [];
//         querySnapshot.forEach((doc) => {
//             stylestattoosArr.push({ ...doc.data(), id: doc.id });
//         });
//         setStylestattoos(stylestattoosArr);
//     });
//     return console.log(stylestattoos);
// };

// try {
//     const querySnapshot = await getDocs(stylestattoosCollection);
//     querySnapshot.forEach((doc) => {
//         stylestattoos.push({
//             id: doc.id,
//             ...doc.data(),
//         });
//     });
//     return stylestattoos;
// } catch (error) {
//     console.log(error);
// }
