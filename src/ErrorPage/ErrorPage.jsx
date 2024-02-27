import { Link } from "react-router-dom";
import sedImg from "../../public/sed.png";

const ErrorPage = () => {
   return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
         <div>
            <img className="w-96 my-0" src={sedImg} alt="" />
            <h3 className="text-6xl  text-center mb-8">Oops!!</h3>
         </div>
         <button className="py-2 px-4 bg-slate-700 rounded-lg text-xl">
            <Link to={"/"}> Go Back</Link>
         </button>
      </div>
   );
};

export default ErrorPage;
