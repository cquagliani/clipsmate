import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, addDoc, setDoc } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
} from "firebase/auth";
import { auth } from "../firebase/clientApp";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          first: user.displayName,
        });
      } else {
        setUser({ email: null, uid: null });
      }
      console.log(user)
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, first, last) => {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
        const uid = cred.user.uid;
        const data = {
          id: cred.user.uid,
          email,
          firstName: first,
          lastName: last,
        };
        async function addUserDB() {
          const newUser = doc(db, 'users', `${cred.user.uid}`);
          await setDoc(newUser, data);
        }
        addUserDB();
    });
  };

  const login = (email, password) => {
    setPersistence(auth, 'session')
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const logout = () => {
    return signOut(auth);
  }

  const value = {
    user,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};


export const UserAuth = () => {
  return useContext(AuthContext);
}
