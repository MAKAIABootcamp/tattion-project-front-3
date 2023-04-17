import React, { useState, useEffect } from "react";
import { db } from "@/firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";

// export const fetchStylesTattoos = () => {
//     const [loading, setLoading] = useState(true);
//     const [erro, setError] = useState(false);
//     const [stylesTattoos, setStylesTattoos] = useState(null);

//     useEffect(() => {
//         async funtion fetchStylesTattoos() {
//              try {

//                 const q = query(collection(db,"stylestattoos"))
//                 const unsubscribe = onSnapshot(q, (querySnapshot) => {
//                     let stylestattoosArr = [];
//                     querySnapshot.forEach((doc) => {
//                       stylestattoosArr.push({ ...doc.data(), id: doc.id });
//                     });
//                     setStylesTattoos(stylestattoosArr);
//                   });
//             } catch (error) {

//             }
//         }
//     }, []);
// };
