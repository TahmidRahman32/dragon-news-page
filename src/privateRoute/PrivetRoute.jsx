import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
   const { user, loading } = useContext(authContext);
   const location = useLocation();
   console.log(location);

   if (loading) {
      return (
         <div className="text-center">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
         </div>
      );
   }
   if (user) {
      return children;
   }
   return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRoute;
