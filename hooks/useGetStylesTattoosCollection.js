import { db } from "@/firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetStylestattoosCollection = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stylestattoos, setStylestattoos] = useState(null);

  useEffect(() => {
    async function fetchStylestattoos() {
      try {
        const q = query(collection(db, "stylestattoos"));
        const unsuscribe = onSnapshot(q, (querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          setStylestattoos(data);
        });
        return () => unsuscribe();
      } catch (err) {
        setError("Failed to load designs");
      } finally {
        setLoading(false);
      }
    }
    fetchStylestattoos();
  }, []);
  return { loading, error, stylestattoos };
};
