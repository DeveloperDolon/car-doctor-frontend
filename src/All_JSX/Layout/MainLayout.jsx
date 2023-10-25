import { useContext, useEffect } from "react";
import { DataProvider } from "../DataProvider/AuthProvider";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const {theme} = useContext(DataProvider);

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);

       if(theme === "light") {
        document.documentElement.classList.add("dark");
       } else {
        document.documentElement.classList.remove("dark");
       }
    }, [theme]);

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;