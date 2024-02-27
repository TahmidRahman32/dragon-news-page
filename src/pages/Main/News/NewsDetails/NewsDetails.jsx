import { useParams } from "react-router-dom";
import Nav from "../../../../sheard/Navber/Nav";
import RightSideNav from "../../RightSideNav";
import Header from "../../../../sheard/Header/Header";

const NewsDetails = () => {
   const { Id } = useParams();
   console.log(Id);
   return (
      <div>
         <Nav></Nav>
         <Header></Header>
         <div className="grid md:grid-cols-4">
            <div className="col-span-3">
               <h3>Dragon News </h3>
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default NewsDetails;
