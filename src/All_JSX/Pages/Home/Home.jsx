
import PropTypes from "prop-types";
import NavBar from "../../Component/NavBar/NavBar";
import { useContext } from "react";
import { DataProvider } from "../../DataProvider/AuthProvider";

const Home = () => {

    const {theme} = useContext(DataProvider);

    return (
        <div className={theme === "dark" ? "text-white" : "text-black"}>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>
        </div>
    );
};

export default Home;

Home.propTypes = {
    className: PropTypes.string,
}