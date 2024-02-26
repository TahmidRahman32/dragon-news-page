import Header from "../../sheard/Header/Header";
import Nav from "../../sheard/Navber/Nav";
import LeftSideNav from "../Main/LeftSideNav";
import Main from "../Main/Main";
import RightSideNav from "../Main/RightSideNav";
import SliderNews from "../brakingNews/SliderNews";

const Home = () => {
   return (
      <div>
         <Nav></Nav>
         <SliderNews></SliderNews>
         <Header></Header>
         <div className="grid md:grid-cols-5">
            <div>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-3">
               <Main></Main>
            </div>
            <div className="">
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default Home;
