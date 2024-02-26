import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const crateUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("create user", currentUser);
         setUser(currentUser);
      });
      return () =>{
         unSubscribe();
      }
   }, []);
   const authInfo = {
      user,
      crateUser,
   };
   return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
