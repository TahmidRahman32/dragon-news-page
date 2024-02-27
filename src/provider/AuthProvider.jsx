import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const crateUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const handleSignIn = (email, password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email, password)
   }

   const logOut = ()=>{
      setLoading(true)
     return signOut(auth)
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("create user", currentUser);
         setUser(currentUser);
         setLoading(false)
      });
      return () =>{
         unSubscribe();
      }
   }, []);
   const authInfo = {
      user,
      loading,
      crateUser,
      handleSignIn,
      logOut,
   };
   return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
