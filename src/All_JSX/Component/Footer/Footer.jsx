
import logo from "../../../assets/logo.svg"
import {FcGoogle} from "react-icons/fc";
import {PiTwitterLogoDuotone, PiFacebookLogoDuotone} from "react-icons/pi";
import {FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
    return (
       <div className="bg-black">
         <footer className="footer max-w-7xl lg:px-0 md:px-5 px-3 mx-auto md:py-32 py-20 text-white md:mt-40 mt-28">
            <aside>
                <img className="mb-5" src={logo} alt="" />
                <p className="leading-relaxed">Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>

                <div className="text-4xl flex gap-5 mt-6">
                    <FcGoogle className="cursor-pointer"></FcGoogle>
                    <PiTwitterLogoDuotone className="cursor-pointer"></PiTwitterLogoDuotone>
                    <FaInstagramSquare className="cursor-pointer"></FaInstagramSquare>
                    <PiFacebookLogoDuotone className="cursor-pointer"></PiFacebookLogoDuotone>
                </div>
            </aside>
            <nav>
                <header className="font-bold md:text-lg mb-5 text-white">About</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="font-bold md:text-lg mb-5 text-white">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="font-bold md:text-lg mb-5 text-white">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
       </div>
    );
};

export default Footer;