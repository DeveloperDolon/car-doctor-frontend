import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const DataProvider = createContext();

const AuthProvider = ({children}) => {

    const [theme, setTheme] = useState("light");
    
    const authInfo = {
        theme, 
        setTheme
    };

    return (
        <DataProvider.Provider value={authInfo}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node
}