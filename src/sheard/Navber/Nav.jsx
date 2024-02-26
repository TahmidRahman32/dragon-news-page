import logo from "../../../public/logo.png";
import moment from "moment";
const Nav = () => {
   return (
      <div>
         
         <div className="text-center">
            <img className="  mx-auto" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="mb-6">{moment().format("dddd, MMMM D, YYYY")}</p>
         </div>
      </div>
   );
};

export default Nav;
