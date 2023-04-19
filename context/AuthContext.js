import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userInfo = useRef(null);

  const signUp = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      const user = res.user;
      updateProfile(user, {
        displayName: name,
      });
    });
    Cookies.set("loggedin", true);
    return;
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    Cookies.set("loggedin", true);
  };

  const logout = () => {
    return signOut(auth), Cookies.remove("loggedin");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signIn,
    signUp,
    logout,
    userInfo,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
