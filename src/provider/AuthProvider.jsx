import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
  
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
useEffect(()=>{
  const hello= onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
   });
   return ()=>{
hello()
   }
},[])

 const loginUser = (email, password) => {
   console.log(email, password);
   return signInWithEmailAndPassword(auth, email, password);
 };

const logout =()=>{
    signOut(auth);
}
  const data = {
    user,
    setUser,
    registerUser,
    logout,
    loginUser,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
