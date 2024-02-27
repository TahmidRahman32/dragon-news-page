import { Link, NavLink } from "react-router-dom";
import profilePic from "../../../public/user.png";
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const Header = () => {
   const { user, logOut } = useContext(authContext);
   const links = (
      <>
         <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>{" "}
         </li>
         <li>
            {" "}
            <NavLink to={"/about"}>About</NavLink>{" "}
         </li>
         <li>
            {" "}
            <NavLink to={"/career"}>Career</NavLink>{" "}
         </li>
      </>
   );

   const handleLogout = () =>{
      logOut()
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            console.log(error);
         });
   } 

   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {links}
               </ul>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
         </div>
         <div className="navbar-end">
            <img className="w-10 mx-3 rounded-full" src={profilePic} alt="" />

            {user ? (
               <button onClick={handleLogout} className="btn">
                  SignOut
               </button>
            ) : (
               <Link className="btn" to={"/login"}>
                  Login
               </Link>
            )}
         </div>
      </div>
   );
};

export default Header;
