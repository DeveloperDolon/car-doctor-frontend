import PropTypes from "prop-types";
import ServiceItem from "../ServiceItem/ServiceItem";


const Service = ({data}) => {
    return (
        <div className="pt-10 md:mb-32 mb-20 text-center">
            <h4 className="md:text-lg font-bold text-base text-[#FF3811]">Service</h4>

            <h1 className="md:text-5xl text-3xl my-5 font-bold">Our Service Area</h1>

            <p className="md:leading-loose leading-relaxed md:text-base text-sm">
                The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable. 
            </p>


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:mt-16 mt-12">
                {data?.map(item => <ServiceItem key={item.service_id} item={item}>

                </ServiceItem>)}
            </div>
            <div>
                <button className="inline-block duration-200 bg-[#FF3811] mt-14 py-3 px-6 rounded-lg text-white font-semibold md:text-base text-sm hover:bg-white hover:outline outline-black hover:text-[#FF3811]">More Service</button>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    data : PropTypes.object,
};