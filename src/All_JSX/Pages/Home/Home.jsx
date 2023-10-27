
import PropTypes from "prop-types";
import Banner from "../../Component/Banner/Banner";
import About from "../../Component/About/About";
import Service from "../../Component/Service/Service";
import {
    useLoaderData,
  } from "react-router-dom";
import ContactInfo from "../../Component/Contact-infos/Contact-info";
import Products from "../../Component/Products/Products";
import Team from "../../Component/Team/Team";
import Features from "../../Component/Features/Features";
import Testimonial from "../../Component/Testmonial/Testmonial";

const Home = () => {

    const data = useLoaderData();

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