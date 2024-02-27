import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)
   const googleProvider = new GoogleAuthProvider();
   const gitHubProvider = new GithubAuthProvider();
   const crateUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const handleGithubProvider = ()=>{
      return signInWithPopup(auth, gitHubProvider)
   }

   const handleGoogle =() =>{
     return  signInWithPopup( auth,googleProvider)
   }

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
      handleGoogle,
      handleGithubProvider,
      logOut,
   };
   return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
