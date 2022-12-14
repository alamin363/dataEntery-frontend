import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const [DisplayMode, setDisplayMode] = useState(false);
  const GoogleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updataUser = (userInfo) => {
    // setLoader(true)
    return updateProfile(auth.currentUser, userInfo);
  };
  const LogOut = () => {
    return signOut(auth);
  };
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoader(false);
      setUser(user);

      return () => {
        unsubscribe();
      };
    });
  }, []);
  console.log(user?.email)
  const name="alamin"
  const authInfo = {
    createUser,
    signIn,
    user,
    LogOut,
    updataUser,
    loader,
    LoginWithGoogle,
    DisplayMode,
    setDisplayMode,
    name
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
