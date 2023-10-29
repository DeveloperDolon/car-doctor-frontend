import { useLoaderData } from "react-router-dom";
import checkOut from "../../../assets/images/checkout/checkout.png";
import vector from "../../../assets/images/checkout/Vector.png";
const Checkout = () => {

    const data = useLoaderData();
    console.log(data);

    const handleSubmit = (e) => {
        alert("Submitted!")
    }

    return (
        <div className="max-w-7xl lg:px-0 md:px-5 px-3 mx-auto">
            <div style={{
                background: `url("${checkOut}") no-repeat center center`,
                backgroundSize: "cover"
            }} className="rounded-xl md:px-32 px-28 relative overflow-hidden mt-8">
                <span className="w-full z-0 h-full left-0 absolute overlay"></span>

                <div style={{ zIndex: "5" }} className="z-40 relative">
                    <h1 className="md:text-5xl text-3xl font-bold md:pt-32 pt-24 md:pb-28 pb-20 text-white">Check Out</h1>

                    <div
                        style={{
                            background: `url("${vector}") no-repeat center center`,
                            backgroundSize: "100% 100%",
                        }}
                        className="w-fit mx-auto text-white font-semibold sm:text-base text-sm md:text-lg">
                        <p className="py-5 px-16">Home / Checkout</p>
                    </div>
                </div>
            </div>

            <div className="md:mt-32 mt-20 bg-[#7777773d] md:py-32 py-20 lg:px-24 md:px-20 px-5 rounded-xl">

                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <input className="py-5 px-5 rounded-lg" defaultValue={data.title} placeholder="Service" type="text" />
                        <input className="py-5 px-5 rounded-lg" defaultValue={data.email} placeholder="Email" type="text" />
                        <input className="py-5 px-5 rounded-lg" placeholder="Date" type="date" />
                        <input className="py-5 px-5 rounded-lg" defaultValue={data.price} placeholder="Price" type="text" />
                    </div>

                    <textarea name="message" id="message" className="w-full mt-8 rounded-lg pt-5 px-5" cols="30" placeholder="Your Message" rows="10"></textarea>

                    <input type="submit" value="Order Confirm" className="w-full mt-8 bg-[#FF3811] text-white font-bold md:text-lg text-base py-5 rounded-lg cursor-pointer" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;