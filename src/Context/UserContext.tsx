import { useCallback, useEffect, useState } from "react";
import { appName, UserContext } from "../constants";
import { UserInfo } from "../constants/types";


export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem(`${appName}__info`) || "null"))

    const updateUser = useCallback((updatedInfo: Partial<UserInfo>, updateLocalStorage = false) => {
        const data = { ...(userInfo ?? {}), ...updatedInfo }
        setUserInfo(data)

        if (updateLocalStorage && typeof window !== 'undefined') {
            localStorage.setItem(`${appName}__info`, JSON.stringify(data))
        }
    }, [userInfo])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(`${appName}__info`) || "null")
        if (!userInfo) {
            const storedUserInfo = JSON.parse(userData)
            updateUser(storedUserInfo)
        }
    }, [updateUser, userInfo])

    const logout = () => {
        localStorage.removeItem(`${appName}__info`)
        setUserInfo(null)
    }

    return (
        <UserContext.Provider value={{ updateUser, userInfo, logout }}>
            {children}
        </UserContext.Provider>
    )
}
