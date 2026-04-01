import {createContext} from "react";
import ReactNode from "react"

interface ContextProps {
    siteTitle?: string;
}

interface ContextProviderProps {
    children: ReactNode
}

export const Context = createContext<ContextProps>({
    siteTitle: "Ulugbek Umaraliev | "
});


export default function ContextProvider({ children }: ContextProviderProps) {
    const defaultValue = {}

    return <Context.Provider value={defaultValue}>
        {children}
    </Context.Provider>
}
