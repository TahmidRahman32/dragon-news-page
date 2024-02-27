import { useEffect, useState } from "react";
import News from "./News/News";

const Main = () => {
   const [newses, setNewses] = useState([]);

   useEffect(() => {
      fetch("news.json")
         .then((res) => res.json())
         .then((data) => setNewses(data));
   }, []);
   return (
      <div className="mx-3">
         <h3 className="text-2xl font-semibold">Dragon News Home</h3>
         <div>
            {newses.map((news) => (
               <News news={news} key={news._id}></News>
            ))}
         </div>
      </div>
   );
};

export default Main;
