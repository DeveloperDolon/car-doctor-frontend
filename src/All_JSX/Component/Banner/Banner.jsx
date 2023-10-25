

import imgOne from "../../../assets/images/banner/1.jpg";
import imgTow from "../../../assets/images/banner/2.jpg";
import imgThree from "../../../assets/images/banner/3.jpg";
import imgFore from "../../../assets/images/banner/4.jpg";
import imgFive from "../../../assets/images/banner/5.jpg";
import imgSix from "../../../assets/images/banner/6.jpg";
import "./style.css";

const Banner = () => {
    return (
        <div className="carousel relative w-full h-[650px] overflow-hidden rounded-2xl md:mt-0 mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={imgOne} className="w-full object-cover" />
                <div className="absolute flex gap-5 transform -translate-y-1/2 bottom-7 right-10 z-50">
                    <a href="#slide6" className="btn btn-circle outline-none text-white bg-[#FF3811]">❮</a>
                    <a href="#slide2" className="btn btn-circle outline-none text-white bg-[#FF3811]">❯</a>
                </div>
                <span className="w-full h-full absolute overlay"></span>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={imgTow} className="w-full object-cover" />
                <div className="absolute flex gap-5 transform -translate-y-1/2 bottom-7 right-10 z-50">
                    <a href="#slide1" className="btn btn-circle outline-none text-white bg-[#FF3811]">❮</a>
                    <a href="#slide3" className="btn btn-circle outline-none text-white bg-[#FF3811]">❯</a>
                </div>
                <span className="w-full h-full absolute overlay"></span>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={imgThree} className="w-full object-cover" />
                <div className="absolute flex gap-5 transform -translate-y-1/2 bottom-7 right-10 z-50">
                    <a href="#slide2" className="btn btn-circle outline-none text-white bg-[#FF3811]">❮</a>
                    <a href="#slide4" className="btn btn-circle outline-none text-white bg-[#FF3811]">❯</a>
                </div>
                <span className="w-full h-full absolute overlay"></span>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={imgFore} className="w-full object-cover" />
                <div className="absolute flex gap-5 transform -translate-y-1/2 bottom-7 right-10 z-50">
                    <a href="#slide3" className="btn btn-circle outline-none text-white bg-[#FF3811]">❮</a>
                    <a href="#slide5" className="btn btn-circle outline-none text-white bg-[#FF3811]">❯</a>
                </div>
                <span className="w-full h-full absolute overlay"></span>
            </div> 
            <div id="slide5" className="carousel-item relative w-full">
                <img src={imgFive} className="w-full object-cover" />
                <div className="absolute flex gap-5 transform -translate-y-1/2 bottom-7 right-10 z-50">
                    <a href="#slide4" className="btn btn-circle outline-none text-white bg-[#FF3811]">❮</a>
                    <a href="#slide6" className="btn btn-circle outline-none text-white bg-[#FF3811]">❯</a>
                </div>
                <span className="w-full h-full absolute overlay"></span>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={imgSix} className="w-full object-cover" />
                <div className="absolute flex gap-5 transform -translate-y-1/2 bottom-7 right-10 z-50">
                    <a href="#slide5" className="btn btn-circle outline-none text-white bg-[#FF3811]">❮</a>
                    <a href="#slide1" className="btn btn-circle outline-none text-white bg-[#FF3811]">❯</a>
                </div>
                <span className="w-full h-full absolute overlay"></span>
            </div>

            <div 
            className="absolute top-0 h-full w-full md:px-16 pl-8 flex flex-col justify-center">
                <h1 className="text-5xl font-semibold text-white leading-snug">
                    Affordable <br />Price For Car <br/> Servicing
                </h1>

                <p className="text-white md:w-[50%] py-6">
                    There are many variations of passages of  available, but <br />the majority have suffered alteration in some form
                </p>

                <div className="space-x-5">
                    <button className="text-white bg-[#FF3811] py-3 px-7 rounded-lg border-[#FF3811] border duration-300 hover:bg-transparent">Discover More</button>
                    <button className="text-white  py-3 px-7 rounded-lg border duration-300 hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;