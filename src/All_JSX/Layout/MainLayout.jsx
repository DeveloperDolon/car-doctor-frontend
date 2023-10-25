import { useContext, useEffect } from "react";
import { DataProvider } from "../DataProvider/AuthProvider";
import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";

const MainLayout = () => {
    const { theme } = useContext(DataProvider);

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);

        if (theme === "light") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div>
            <div className={theme === "dark" ? "text-white" : "text-black"}>
                <div className="max-w-7xl mx-auto">
                    <NavBar></NavBar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;