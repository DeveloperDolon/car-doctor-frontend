
import PropTypes from "prop-types";
import Banner from "../../Component/Banner/Banner";
import About from "../../Component/About/About";

const Home = () => {

    return (
        <div>
           <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:mt-10 mt-5">
            <Banner></Banner>

            <About></About>
           </div>
        </div>
    );
};

export default Home;

Home.propTypes = {
    className: PropTypes.string,
}