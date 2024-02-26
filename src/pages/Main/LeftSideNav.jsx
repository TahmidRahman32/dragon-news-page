import { useEffect, useState } from "react";
import Category from "../category/Category";
import { MdOutlineDateRange } from "react-icons/md";
import img1 from "../../../public/1.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";

const LeftSideNav = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      fetch("categories.json")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);
   return (
      <div className=" ">
         <h2 className="text-2xl font-bold my-4">All Category</h2>
         <h3 className="bg-slate-700 py-3 px-2 rounded-lg text-xl mr-5">National News</h3>
         <div>
            {categories.map((category) => (
               <Category category={category} key={category.id}></Category>
            ))}
         </div>
         <div className="mb-3">
            <img src={img1} alt="" />
            <h3 className="text-1xl font-bold my-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex items-center gap-3">
               <p className="font-medium">Sports</p>
               <p>
                  <small className="flex items-center gap-2 ">
                     <MdOutlineDateRange /> <span>Jan 4, 2022</span>
                  </small>
               </p>
            </div>
         </div>
         <div className="mb-3">
            <img src={img2} alt="" />
            <h3 className="text-1xl font-bold my-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex items-center gap-3">
               <p className="font-medium">Sports</p>
               <p>
                  <small className="flex items-center gap-2 ">
                     <MdOutlineDateRange /> <span>Jan 4, 2022</span>
                  </small>
               </p>
            </div>
         </div>
         <div className="mb-3">
            <img src={img3} alt="" />
            <h3 className="text-1xl font-bold my-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex items-center gap-3">
               <p className="font-medium">Sports</p>
               <p>
                  <small className="flex items-center gap-2 ">
                     <MdOutlineDateRange /> <span>Jan 4, 2022</span>
                  </small>
               </p>
            </div>
         </div>
         <div></div>
      </div>
   );
};

export default LeftSideNav;
