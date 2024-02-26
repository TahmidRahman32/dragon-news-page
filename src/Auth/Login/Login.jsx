import { Link } from "react-router-dom";
import Header from "../../sheard/Header/Header";

const Login = () => {
   const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
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
