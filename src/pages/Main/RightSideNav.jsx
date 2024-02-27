import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import zone1 from "../../../public/qZone1.png";
import zone2 from "../../../public/qZone2.png";
import zone3 from "../../../public/qZone3.png";
import "../../style/style.css";
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const RightSideNav = () => {
   const { handleGoogle, handleGithubProvider } = useContext(authContext);

   const handleGooglePopup =()=>{
         handleGoogle()
         .then(result =>{
            console.log(result.user);
         })
         .catch(error =>{
            console.log(error);
         })
   }

   const handleGitHub =() =>{
      handleGithubProvider()
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   }
   return (
      <div className="sticky">
         <div>
            <h2 className="text-2xl font-bold mb-4">Login with</h2>
            <a onClick={handleGooglePopup} className="w-full flex items-center border justify-center text-xl py-1 mb-1 rounded">
               <span className="mx-2 text-xl">
                  <FcGoogle />
               </span>
               Google
            </a>
            <a onClick={handleGitHub} className="w-full flex items-center border justify-center text-xl py-1 rounded">
               <span className="mx-2 text-xl">
                  <FaGithub />
               </span>
               GitHub
            </a>
         </div>
         <div>
            <h3 className="text-2xl font-semibold my-3">Find Us On</h3>
            <div className="border rounded ">
               <Link className="flex items-center gap-2 border-b py-2 pl-5">
                  <FaFacebook /> Facebook
               </Link>
               <Link className="flex items-center gap-2 border-b py-2 pl-5">
                  <FaTwitter /> Twitter
               </Link>
               <Link className="flex items-center gap-2 border-b py-2 pl-5">
                  <FaInstagram /> Instagram
               </Link>
            </div>
         </div>
         <div className="bg-slate-800 my-5 rounded p-3">
            <h3 className="text-3xl font-semibold py-3 px-2">Q-Zone</h3>
            <img src={zone1} alt="" />
            <img src={zone2} alt="" />
            <img src={zone3} alt="" />
         </div>
         <div className="img text-center">
            <h1 className="text-4xl font-bold  pt-8">Create an Amazing Newspaper</h1>
            <h4 className="text-2xl  p-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h4>
            <button className="bg-pink-700 mb-8 py-3 px-4 text-xl font-semibold">Learn More</button>
         </div>
      </div>
   );
};

export default RightSideNav;
