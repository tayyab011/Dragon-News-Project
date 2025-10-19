import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const [loading,setLoading]=useState(true)
  const registerUser = (email, password) => {
  setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
useEffect(()=>{
  const hello= onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoading(false)
   });
   return ()=>{
hello()
   }
},[])

 const loginUser = (email, password) => {
    setLoading(true);
   return signInWithEmailAndPassword(auth, email, password);
 };

 const updtUser=(data)=>{
  return updateProfile(auth.currentUser, data);
 }
const logout =()=>{
    signOut(auth);
}
  const data = {
    user,
    setUser,
    registerUser,
    logout,
    loginUser,
    setLoading,
    loading,
    updtUser,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
