import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const useAuthenticationContext = () => {
    return useContext(AuthContextProvider)
}



export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(JSON.parse( AsyncStorage.getItem("authUser")) || null)
    return (
        <UserContext.Provider value={{ isAuth, setIsAuth }} >
            {children}
        </UserContext.Provider>
    )
}
