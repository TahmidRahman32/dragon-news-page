import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Auth/Login/Login";
import About from "../pages/About/About";
import Career from "../Career/Career";
import Register from "../Auth/Register/Register";
import NewsDetails from "../pages/Main/News/NewsDetails/NewsDetails";
import PrivetRoute from "../privateRoute/PrivetRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/news/:Id",
            element: <PrivetRoute>
                  <NewsDetails></NewsDetails>
               </PrivetRoute>,
         },
         {
            path: "/about",
            element: <About></About>,
         },
         {
            path: "/career",
            element: <Career></Career>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
      ],
   },
]);

export default router;
