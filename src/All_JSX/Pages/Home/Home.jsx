
import PropTypes from "prop-types";
import Banner from "../../Component/Banner/Banner";
import About from "../../Component/About/About";
import Service from "../../Component/Service/Service";
import ContactInfo from "../../Component/Contact-infos/Contact-info";
import Products from "../../Component/Products/Products";
import Team from "../../Component/Team/Team";
import Features from "../../Component/Features/Features";
import Testimonial from "../../Component/Testmonial/Testmonial";
import { useQuery } from "@tanstack/react-query";

const Home = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['services'],
        queryFn: () =>
          fetch('http://localhost:5000/services').then(
            (res) => res.json(),
          ),
    });

    if(isPending) return <div className="h-screen w-full flex justify-center items-center"><span className="loading loading-infinity h-32 w-32"></span></div>

    if(error) return <span className="h-full w-full flex justify-center text-4xl">Error...</span>

    return (
        <div>
           <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:mt-10 mt-5">
            <Banner></Banner>

            <About></About>

            <Service data={data}></Service>

            <ContactInfo></ContactInfo>

            <Products></Products>

            <Team></Team>

            <Features></Features>

            <Testimonial></Testimonial>
           </div>
        </div>
    );
};

export default Home;

Home.propTypes = {
    className: PropTypes.string,
}