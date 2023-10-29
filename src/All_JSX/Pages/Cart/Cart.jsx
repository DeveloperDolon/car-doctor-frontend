import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../DataProvider/AuthProvider";
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from "sweetalert2";

const Cart = () => {
    const { user } = useContext(DataProvider);
    const [bookings, setBookings] = useState([]);

    const handleDeleteBooking = (id) => {
        axios.delete(`http://localhost:5000/bookings/${id}`)
        .then(() => {
            Swal.fire(
                'Good job!',
                'Delete Successful!',
                'success'
            )
        }).catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}&sort=1`)
            .then(res => setBookings(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 overflow-x-hidden">
            <table className="sm:table table-xs w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
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
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cart;