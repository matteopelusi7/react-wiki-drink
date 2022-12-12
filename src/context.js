import {useState, useContext, createContext} from "react"
import useFetch from "./useFetch"

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [query, setQuery] = useState('negroni')

    const {data, isLoading, isError, count} = useFetch(`s=${query}`)

    const searchCocktail = (input) => {
        setQuery(input)
    }

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            query,
            isLoading,
            isError,
            data,
            count,
            searchCocktail
        }}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}