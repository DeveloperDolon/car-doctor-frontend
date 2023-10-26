
import { FaCalendarAlt, FaPhoneVolume } from 'react-icons/fa';
import {FaLocationDot } from 'react-icons/fa6';

const ContactInfo = () => {
    return (
        <div className="md:mb-32 mb-20 grid md:grid-cols-3 grid-cols-1 px-24 py-28 md:gap-0 gap-10 rounded-2xl bg-black text-white">
            <div className='flex items-center gap-6'>
                <FaCalendarAlt className='text-5xl'></FaCalendarAlt>
               <div>
                    <p>We are open monday-friday</p>
                    <h1 className='text-2xl font-semibold mt-2'>7:00 am - 9:00 pm</h1>
               </div>
            </div>

            <div className='flex items-center gap-6'>
                <FaPhoneVolume className='text-5xl'></FaPhoneVolume>
               <div>
                    <p>Have a question?</p>
                    <h1 className='text-2xl font-semibold mt-2'>+2546 251 2658</h1>
               </div>
            </div>

            <div className='flex items-center gap-6'>
                <FaLocationDot className='text-5xl'></FaLocationDot>
               <div>
                    <p>Need a repair? our address</p>
                    <h1 className='text-2xl font-semibold mt-2'>Liza Street, New York</h1>
               </div>
            </div>
        </div>
    );
};

export default ContactInfo;