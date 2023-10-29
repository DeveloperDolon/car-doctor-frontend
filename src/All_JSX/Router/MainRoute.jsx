
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ServicePage from "../Pages/ServicePage/ServicePage";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/LogIn/SignUp";

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
            },
            {
                path: "/services/checkout/:id",
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default MainRoute;