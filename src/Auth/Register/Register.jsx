import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { authContext } from "../../provider/AuthProvider";
import Header from "../../sheard/Header/Header";

const Register = () => {
   const [showPass, setShowPass] = useState(false);
   const [showPass1, setShowPass1] = useState(false);
   const [registerError, setRegisterError] = useState("");
   const [success, setSuccess] = useState("");

   const { crateUser } = useContext(authContext);

   const handleRegister = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
      const password1 = e.target.password1.value;
      const name = e.target.name.value;
      console.log(email, password, password1, name);
      setRegisterError("");
      setSuccess('');
      crateUser(email, password)
         .then((result) => {
            console.log(result.user);
            setSuccess("Create a User Successfully");
         })
         .catch((error) => {
            console.log(error);
            setRegisterError(error.message);
         });
   };

   return (
      <div>
         <Header></Header>
         <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col ">
               <div className="text-center ">
                  <h1 className="text-5xl font-bold">Register now!</h1>
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleRegister} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">
                              Photo Url <small>(Optional)</small>
                           </span>
                        </label>
                        <input type="text" placeholder="Photo" name="Photo url" className="input input-bordered" />
                     </div>
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
                        <div className="relative">
                           <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-72" required />
                           <span onClick={() => setShowPass(!showPass)} className="absolute top-4 right-2">
                              {showPass ? <IoEyeSharp /> : <FaEyeSlash />}
                           </span>
                        </div>
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <div className="relative">
                           <input type={showPass1 ? "text" : "password"} placeholder="password" name="password1" className="input input-bordered w-72" required />
                           <span onClick={() => setShowPass1(!showPass1)} className="absolute top-4 right-2">
                              {showPass1 ? <IoEyeSharp /> : <FaEyeSlash />}
                           </span>
                        </div>
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                     </div>
                  </form>
                  {registerError && <p className="text-red-600 px-4 text-center">{registerError}</p>}
                  {success && <p className="text-green-600 px-4 text-center">{success}</p>}
                  <p className=" py-4 px-4">
                     you have already account
                     <Link className="text-blue-500 mx-2 hover:underline" to={"/login"}>
                        Login
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
