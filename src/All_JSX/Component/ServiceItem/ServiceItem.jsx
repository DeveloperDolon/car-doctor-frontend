import PropTypes from "prop-types";
import { PiArrowRightBold } from 'react-icons/pi';
import { Link } from "react-router-dom";

const ServiceItem = ({ item }) => {

    return (
        <div className="card border">
            <div className="p-7 pb-0">
                <img src={item?.img} alt="Shoes" className="rounded-xl w-full h-[200px] object-cover" />
            </div>
            <div className="card-body py-5 text-left">
                <h2 className="card-title font-bold md:text-2xl text-xl">{item.title}</h2>

                <div className="flex justify-between items-center">
                    <h3 className="md:text-lg text-sm font-bold text-[#FF3811]">Price : ${item.price}</h3>

                    <Link to={`/services/${item._id}`}>
                        <PiArrowRightBold className="text-2xl font-bold text-[#FF3811] cursor-pointer"></PiArrowRightBold>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;

ServiceItem.propTypes = {
    item: PropTypes.object,
};