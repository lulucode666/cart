import React,{ useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    name: "",
    onLogin: () => { },
    onLogout: () => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("Lulu");
    //登入不成功
    const logoutHandler = () => {
        setIsLoggedIn(false);
        setName("");
    }

    //登入成功
    const loginHandler = (name, psd) => {
        setIsLoggedIn(true);
        setName(name);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                name: name,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;