import { useContext, useState } from "react";
import { DataProvider } from "../../DataProvider/AuthProvider";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { RiSearchLine } from 'react-icons/ri';
import defaultImg from "../../../assets/user.png";
import Swal from "sweetalert2";

const NavBar = () => {

    const { theme, setTheme, user, logOut } = useContext(DataProvider);
    const [visible, setVisible] = useState(false);

    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire(
                'Good job!',
                'Sign Out Compleat!',
                'success'
            )
        }).catch(err => console.log(err));
    }

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const navItems = <>
        <li><NavLink
            className={({ isActive, isPending }) => isActive ? "bg-red-500 text-white" : isPending ? "bg-green-500 text-white" : ""}
            to="/">Home</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) => isActive ? "bg-red-500 text-white" : isPending ? "bg-green-500 text-white" : ""}
            to="/about">About</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) => isActive ? "bg-red-500 text-white" : isPending ? "bg-green-500 text-white" : ""}
            to="/service">Services</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) => isActive ? "bg-red-500 text-white" : isPending ? "bg-green-500 text-white" : ""}
            to="/blog">Blog</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) => isActive ? "bg-red-500 text-white" : isPending ? "bg-green-500 text-white" : ""}
            to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 sm:flex-row flex-col font-semibold md:py-6">
            <div className="sm:navbar-start w-full justify-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl h-auto">
                    <img className="lg:w-24 sm:w-20 w-14" src={logo} alt="" />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="sm:navbar-end sm:gap-4 justify-between w-full sm:mt-0 mt-3 relative">
                <button className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-500"}`}>
                    <RiSearchLine></RiSearchLine>
                </button>
                <NavLink 
                className={({ isActive, isPending }) => isActive ? "text-red-500" : isPending ? "bg-green-500 text-white" : ""}
                to={`/cart`}>
                    <button className={`text-2xl`}>
                        <LiaShoppingBagSolid></LiaShoppingBagSolid>
                    </button>
                </NavLink>
                <input type="checkbox" onClick={handleTheme} className="toggle toggle-error" />
                <button className="sm:font-semibold font-medium sm:text-base text-xs sm:py-3 sm:px-5 py-2 px-3 rounded-md outline text-[#FF3811] outline-[1.5px] duration-500 hover:bg-[#FF3811] hover:text-white outline-[#FF3811]">Appointment</button>
                {
                    user ? <><img onClick={() => setVisible(!visible)} className="md:w-12 rounded-full w-9 cursor-pointer" src={user?.photoURL ? user?.photoURL : defaultImg} alt="" />
                        <div className={` absolute bg-[#89898952] rounded-lg duration-300 -bottom-20 ${visible ? "h-auto w-auto px-5 py-3" : "invisible p-0"} z-50`}>
                            <h2>{user?.displayName}</h2>

                            <button onClick={handleLogOut} className="btn-sm bg-[#FF3811] rounded-md">Log Out</button>
                        </div>
                    </> :
                        <button className="btn">
                            <Link to="/login">Lon In</Link>
                        </button>
                }
            </div>
        </div>
    );
};

export default NavBar;