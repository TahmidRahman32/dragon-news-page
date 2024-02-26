import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
         <div>
            <h3 className="text-4xl my-4">Oops!!</h3>
         </div>
         <button className="py-2 px-4 bg-slate-700 rounded-lg text-xl">
            <Link to={"/"}> Go Back</Link>
         </button>
      </div>
   );
};

export default ErrorPage;
