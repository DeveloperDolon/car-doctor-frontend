
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/services"),
                element: <Home></Home>
            }
        ]
    }
]);

export default MainRoute;