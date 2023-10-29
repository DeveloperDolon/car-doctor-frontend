import { useQuery } from "@tanstack/react-query";
import { Link, NavLink, useParams } from "react-router-dom";
import checkOut from "../../../assets/images/checkout/checkout.png";
import vector from "../../../assets/images/checkout/Vector.png";
import { CgPlayButtonO } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import videoThubnail from "../../../assets/images/banner/2.jpg"
import { useEffect, useState } from "react";
import logo from "../../../assets/logo.svg";

const ServicePage = () => {
    const { id } = useParams();
    const [servicesTitle, setServicesTitle] = useState([]);
    const { isPending, error, data } = useQuery({
        queryKey: ['service'],
        queryFn: () => {
            return fetch(`http://localhost:5000/services/${id}`).then((res) => res.json()).catch(err => console.log(err.message))
        }
    });
    
    useEffect(() => {

        fetch("http://localhost:5000/services/title")
            .then(titles => {
                    return titles.json();
                }    
            ).then(allData => {
                
                const refining = allData.filter(item => item._id !== data._id);
                setServicesTitle(refining);
            })
    }, [data]);


    if (isPending) return <div className="h-screen w-full flex justify-center items-center"><span className="loading loading-infinity h-32 w-32"></span></div>

    if (error) return <span className="h-full w-full flex justify-center text-4xl">Error... {error.message}</span>

    return (
        <div className="max-w-7xl mx-auto md:mt-12 mt-10 lg:px-0 md:px-5 px-3">
            <div style={{
                background: `url("${checkOut}") no-repeat center center`,
                backgroundSize: "cover"
            }} className="rounded-xl md:px-32 px-28 relative overflow-hidden">
                <span className="w-full z-0 h-full left-0 absolute overlay"></span>

                <div style={{ zIndex: "5" }} className="z-40 relative">
                    <h1 className="md:text-5xl text-3xl font-bold md:pt-32 pt-24 md:pb-28 pb-20 text-white">Service Details</h1>

                    <div
                        style={{
                            background: `url("${vector}") no-repeat center center`,
                            backgroundSize: "100% 100%",
                        }}
                        className="w-fit mx-auto text-white font-semibold sm:text-base text-sm md:text-lg">
                        <p className="py-5 px-16">Home/Service Details</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 md:mt-32 mt-24 gap-7">
                <div className="md:col-span-2">
                    <div>
                        <img className="w-full rounded-xl" src={data.img} alt="" />
                    </div>

                    <h1 className="text-2xl font-bold lg:text-4xl md:my-10 my-7">{data.title}</h1>

                    <p className="md:leading-loose leading-relaxed md:text-base text-sm">
                        {data.description}
                    </p>

                    <div className="mt-12 grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-8">
                        {
                            data?.facility?.map(item => <div className="border-[#FF3811] border-t-[5px] bg-[#8b8b8b36] py-10 px-8 rounded-lg overflow-hidden" key={item._id}>
                                <h3 className="md:text-2xl text-lg font-semibold mb-3">{item.name}</h3>
                                <p className="leading-relaxed">{item.details}</p>
                            </div>)
                        }
                    </div>

                    <p className="md:my-20 my-14 leading-loose">
                        {data.description}
                    </p>


                    <div>
                        <h1 className="md:text-4xl text-2xl font-bold mb-6">3 Simple Steps to Process</h1>

                        <p className="leading-loose pt-3">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7 grid-cols-1 md:mt-16 mt-10">
                        <div className="border flex flex-col items-center px-14 py-10 rounded-xl">

                            <div className="relative w-fit flex justify-center items-center">
                                <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="41.5" cy="41.5" r="41.5" fill="#FF3811" fillOpacity="0.1" />
                                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                                </svg>
                                <h3 className="absolute md:text-lg text-base font-bold text-white">01</h3>
                            </div>

                            <h1 className="md:text-2xl text-lg text-center font-bold uppercase md:py-5 py-3">Step One</h1>

                            <p className="text-center">It uses a dictionary of over 200 .</p>

                        </div>

                        <div className="border flex flex-col items-center px-14 py-10 rounded-xl">

                            <div className="relative w-fit flex justify-center items-center">
                                <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="41.5" cy="41.5" r="41.5" fill="#FF3811" fillOpacity="0.1" />
                                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                                </svg>
                                <h3 className="absolute md:text-lg text-base font-bold text-white">02</h3>
                            </div>

                            <h1 className="md:text-2xl text-lg text-center font-bold uppercase md:py-5 py-3">Step Tow</h1>

                            <p className="text-center">It uses a dictionary of over 200 .</p>

                        </div>

                        <div className="border flex flex-col items-center px-14 py-10 rounded-xl">

                            <div className="relative w-fit flex justify-center items-center">
                                <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="41.5" cy="41.5" r="41.5" fill="#FF3811" fillOpacity="0.1" />
                                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                                </svg>
                                <h3 className="absolute md:text-lg text-base font-bold text-white">03</h3>
                            </div>

                            <h1 className="md:text-2xl text-lg text-center font-bold uppercase md:py-5 py-3">Step Three</h1>

                            <p className="text-center">It uses a dictionary of over 200 .</p>

                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl mt-20 flex justify-center items-center">
                        <img className="h-full object-cover" src={videoThubnail} alt="" />
                        <span className="text-[#FF3811] absolute z-40 text-8xl"><CgPlayButtonO></CgPlayButtonO></span>
                    </div>
                </div>

                <div>
                    <div className="bg-[#8b8b8b36] px-10 py-10 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-bold pb-5">Service</h3>

                        <dir className="space-y-5">
                            {servicesTitle?.map(item => {
                                return <div key={item._id} className="bg-white flex justify-between px-5 py-5 rounded-lg items-center">
                                    <h1 className="md:text-xl text-lg font-semibold">{item.title}</h1>

                                    <NavLink to={`/services/${item._id}`}>
                                        <BsArrowRight className="md:text-2xl text-lg font-semibold text-[#FF3811]"></BsArrowRight>
                                    </NavLink>
                                </div>
                            })}
                        </dir>
                    </div>

                    <div className="bg-black text-white py-11 px-10 rounded-lg mt-10">
                        <h1 className="md:text-3xl text-xl font-bold">Download</h1>

                        <div className="mt-8 flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <AiOutlineFileText className="md:text-4xl text-2xl"></AiOutlineFileText>
                                <div>
                                    <h2 className="md:text-2xl font-bold text-lg">Our Brochure</h2>
                                    <p className="md:text-base text-sm font-light">Download</p>
                                </div>
                            </div>
                            <span className="md:text-3xl text-xl bg-[#FF3811] rounded-lg px-2 py-2 cursor-pointer">
                                <BsArrowRight ></BsArrowRight>
                            </span>
                        </div>
                        
                        <div className="mt-8 flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <AiOutlineFileText className="md:text-4xl text-2xl"></AiOutlineFileText>
                                <div>
                                    <h2 className="md:text-2xl font-bold text-lg">Company Details</h2>
                                    <p className="md:text-base text-sm font-light">Download</p>
                                </div>
                            </div>
                            <span className="md:text-3xl text-xl bg-[#FF3811] rounded-lg px-2 py-2 cursor-pointer">
                                <BsArrowRight ></BsArrowRight>
                            </span>
                        </div>
                    </div>

                    <div className="bg-black mt-10 rounded-lg py-14 px-14">
                        <div className="flex justify-center">
                            <img src={logo} alt="" />
                        </div>

                        <h3 className="md:text-2xl text-lg font-bold text-white text-center mt-5 mb-10">
                        Need Help? We Are Here
                        To Help You
                        </h3>

                        <div className="bg-white px-8 py-6 pb-14 rounded-lg relative flex justify-center flex-col">
                            <h3 className="md:text-2xl text-lg font-bold text-black text-center">
                                <span className="text-[#FF3811]">Car Doctor</span> Special
                            </h3>

                            <p className="md:text-base text-sm font-semibold text-center mt-5">
                                Save up to <span className="text-[#FF3811]">60% off</span>
                            </p>

                            <h3 className="md:text-xl absolute p-5 text-lg font-bold text-white bg-[#FF3811] rounded-lg z-40 -bottom-8 left-[25%]">
                                Get A Quote
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h1 className="md:text-4xl my-10 text-2xl font-bold">Price : ${data.price}</h1>

                        <Link to={`/services/checkout/${data._id}`}>
                            <button className="block bg-[#FF3811] text-white w-full py-5 rounded-lg font-semibold md:text-xl text-base">Proceed Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;