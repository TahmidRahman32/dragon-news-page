import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../sheard/Header/Header";
import { useContext, useState } from "react";
import { authContext } from "../../provider/AuthProvider";

const Login = () => {
   const [loginError, setLoginError] = useState("");
   const [success, setSuccess] = useState("");
   const { handleSignIn } = useContext(authContext);
   const location = useLocation();
   const navigate = useNavigate();

   console.log("is cumming", location);
   const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      setLoginError("");
      setSuccess("");
      handleSignIn(email, password)
         .then((result) => {
            console.log(result.user);
            setSuccess("Login Successfully");

            navigate(location?.state ? location.state : "/");
         })
         .catch((error) => {
            console.log(error);
            setLoginError(error.message);
         });
   };
   return (
      <div>
         <Header></Header>
         <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col ">
               <div className="text-center ">
                  <h1 className="text-5xl font-bold">Login now!</h1>
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleLogin} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
                  {loginError && <p className="text-red-600 px-4 text-center">{loginError} please Register</p>}
                  {success && <p className="text-green-600 px-4 text-center">{success}</p>}
                  <p className=" py-4 px-4">
                     Please
                     <Link className="text-blue-500 mx-2 hover:underline" to={"/register"}>
                        Register
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
