import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = () => {
        setUser({
            name: "shehani",
            profilePic: "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
    )
}