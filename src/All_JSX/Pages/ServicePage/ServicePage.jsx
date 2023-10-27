import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import checkOut from "../../../assets/images/checkout/checkout.png";
import vector from "../../../assets/images/checkout/Vector.png";
import { CgPlayButtonO } from 'react-icons/cg';
import videoThubnail from "../../../assets/images/banner/2.jpg"

const ServicePage = () => {
    const { id } = useParams();
    console.log(id);

    const { isPending, error, data } = useQuery({
        queryKey: ['service'],
        queryFn: () =>
            fetch(`http://localhost:5000/services/${id}`).then(
                (res) => res.json(),
            ),
    });

    console.log(data);

    if (isPending) return <div className="h-screen w-full flex justify-center items-center"><span className="loading loading-infinity h-32 w-32"></span></div>

    if (error) return <span className="h-full w-full flex justify-center text-4xl">Error...</span>

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

            <div className="grid md:grid-cols-3 grid-cols-1 md:mt-32 mt-24 gap-10">
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
                        <span  className="text-[#FF3811] absolute z-40 text-8xl"><CgPlayButtonO></CgPlayButtonO></span>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default ServicePage;