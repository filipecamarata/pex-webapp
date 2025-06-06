import { createContext } from "react";  

import useAuth from "../hooks/userAuth.jsx";

const Context = createContext()

function UserProvider({ children }){

    const {  authenticated, register, login, logout } = useAuth()

    return(
        <Context.Provider value={ { authenticated, register, login, logout} }>
            { children }
        </Context.Provider> 
    )
}

export { Context, UserProvider}
