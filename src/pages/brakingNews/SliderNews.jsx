import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const SliderNews = () => {
   return (
      <div className="flex bg-slate-300 rounded-lg sticky">
         <button className="btn btn-secondary  text-xl text-white">Latest</button>
         <Marquee pauseOnHover={true} speed={100} className="text-black">
            <Link to={"/"}> I can be a React component, multiple React components, or just some text......</Link>
            <Link to={"/"}> I can be a React component, multiple React components, or just some text......</Link>
         </Marquee>
      </div>
   );
};

export default SliderNews;
