import { Link } from "react-router-dom";

const Category = ({ category }) => {
   const { name } = category;
   return (
      <div className="pl-8">
         <p className="my-3">
            <Link to={`/category/${category.id}`}>{name}</Link>
         </p>
      </div>
   );
};

export default Category;
