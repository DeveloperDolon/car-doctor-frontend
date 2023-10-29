import { useLoaderData } from "react-router-dom";
import checkOut from "../../../assets/images/checkout/checkout.png";
import vector from "../../../assets/images/checkout/Vector.png";
import { useContext } from "react";
import { DataProvider } from "../../DataProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const Checkout = () => {

    const data = useLoaderData();
    const {user} = useContext(DataProvider);

    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();

        const service = e.target.service.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const price = e.target.price.value;
        const message = e.target.message.value;

        const info = {service_id : data._id, service, email, image: data.img, date, price, message}

        axios.post("http://localhost:5000/bookings", info)
        .then((res) => {
            
            if(res.data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Booking Completed!',
                    'success'
                )
                return;
            }

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Booking is not completed! Try again!",
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
                footer: '<a href="">Why do I have this issue?</a>'
              })
        });

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
                        <input className="py-5 px-5 rounded-lg" name="service" value={data.title} placeholder="Service" type="text" />
                        <input className="py-5 px-5 rounded-lg" name="email" value={user.email} placeholder="Email" type="text" />
                        <input className="py-5 px-5 rounded-lg" name="date" required placeholder="Date" type="date" />
                        <input className="py-5 px-5 rounded-lg" name="price" value={data.price} placeholder="Price" type="text" />
                    </div>

                    <textarea name="message" id="message" className="w-full mt-8 rounded-lg pt-5 px-5" cols="30" placeholder="Your Message" rows="10"></textarea>

                    <input type="submit" value="Order Confirm" className="w-full mt-8 bg-[#FF3811] text-white font-bold md:text-lg text-base py-5 rounded-lg cursor-pointer" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;