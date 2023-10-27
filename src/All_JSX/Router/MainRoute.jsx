
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ServicePage from "../Pages/ServicePage/ServicePage";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services/:id",
                element: <ServicePage></ServicePage>
            }
        ]
    }
]);

export default MainRoute;