import { FaRegBookmark, FaStar } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";

const News = ({ news }) => {
   console.log(news);
   const { author, image_url, total_view, rating, title, details } = news;
   return (
      <div className="shadow-lg my-16 px-4">
         <div className="flex items-center justify-between bg-slate-800 my-1 rounded px-4 py-2 ">
            <div className="flex gap-2 ">
               <img className="w-11 rounded-full " src={author?.img} alt="" />
               <div>
                  <h4>{author?.name}</h4>
                  <p>{author?.published_date}</p>
               </div>
            </div>
            <div className="flex gap-2 mr-6">
               <span>
                  <FaRegBookmark />
               </span>
               <span>
                  <CiShare2 />
               </span>
            </div>
         </div>
         <div className="">
            <h2 className="text-2xl font-bold px-3">{title}</h2>
            <img className="w-full" src={image_url} alt="" />
         </div>
         <div>
            <p className="py-4">
               {details.slice(0, 200)}..... <span className="text-yellow-600">Read More</span>
            </p>
            <hr />
            <div className="py-3 flex justify-between">
               <p className="flex gap-2 items-center ">
                  <span className="flex items-center text-yellow-600">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                  </span>
                  {rating.number}
               </p>
               <p className="flex items-center gap-1">
                  <span>
                     <IoEyeSharp />
                  </span>
                  {total_view}
               </p>
            </div>
         </div>
      </div>
   );
};

export default News;
