import { db } from "@/firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGeTtattooartistsCollection = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tattooartists, setTattooartists] = useState(null);

    useEffect(() => {
        async function fetchTattooartists() {
            try {
                const q = query(collection(db, "tattooartists"));
                const unsuscribe = onSnapshot(q, (querySnapshot) => {
                    let data = [];
                    querySnapshot.forEach((doc) => {
                        data.push({ ...doc.data(), id: doc.id });
                    });
                    setTattooartists(data);
                });
                return () => unsuscribe();
            } catch (err) {
                setError("Failed to load designs");
            } finally {
                setLoading(false);
            }
        }
        fetchTattooartists();
    }, []);
    return { loading, error, tattooartists };
};
