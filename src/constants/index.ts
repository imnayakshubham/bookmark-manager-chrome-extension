import { createContext, useContext } from "react"
import { UserContextType } from "./types"

export const appName = "bookmark-manager-app"

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider')
    }
    return context
}
