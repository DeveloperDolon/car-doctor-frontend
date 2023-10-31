import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../DataProvider/AuthProvider";
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from "sweetalert2";

const Cart = () => {
    const { user } = useContext(DataProvider);
    const [bookings, setBookings] = useState([]);

    const handleDeleteBooking = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/bookings/${id}`)
                    .then(() => {
                        Swal.fire(
                            'Good job!',
                            'Delete Successful!',
                            'success'
                        )
                        const newBookings = bookings.filter(booking => booking._id !== id );
                        setBookings(newBookings)
                    }).catch(err => console.error(err));
                    return;
            }
            Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}&sort=1`, {withCredentials: true})
            .then(res => setBookings(res.data))
            .catch(err => console.log(err))
    }, [user?.email]);

    const handleBookingConfirmed = (id) => {
        axios.patch(`http://localhost:5000/bookings/${id}`, {
            status: "confirm",
        })
        .then(res => {
            if(res.data.modifiedCount > 0) {
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status= "confirm";
                const newBookings = [updated, ...remaining];

                setBookings(newBookings)
            }
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 overflow-x-hidden">
            <table className="sm:table table-xs w-full mt-11">
                {/* head */}
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Image</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map(booking => <tr key={booking._id}>
                            <td>
                                <FaDeleteLeft onClick={() => handleDeleteBooking(booking._id)} className="sm:text-4xl text-2xl cursor-pointer"></FaDeleteLeft>
                            </td>
                            <td>
                                <img className="md:w-32 w-20 rounded-lg" src={booking.image} alt="" />
                            </td>
                            <td>
                                <h2 className="md:text-xl text-xs font-bold">{booking.service}</h2>
                                <p className="">Data: {booking.date}</p>
                            </td>
                            <td className="md:text-xl text-xs font-bold">${booking.price}</td>
                            <th>
                                {
                                    booking?.status === "confirm" ? <span className="text-[#FF3811] font-semibold">Confirmed</span>
                                     : 
                                    <button onClick={() => handleBookingConfirmed(booking._id)} className="btn btn-ghost btn-xs">Confirm</button>
                                }
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cart;