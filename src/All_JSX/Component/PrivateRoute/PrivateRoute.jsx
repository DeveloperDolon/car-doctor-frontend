import PropTypes from "prop-types";
import { useContext } from "react";
import { DataProvider } from "../../DataProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(DataProvider);

    if(loading) return <div className="h-screen w-full"><span className="loading loading-bars loading-lg"></span></div>

    if(user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}