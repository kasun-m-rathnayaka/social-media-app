import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:3001/api/auth/login", inputs, {
            withCredentials: true,
        });
        setUser(res.data)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
    )
}