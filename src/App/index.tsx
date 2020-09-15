import React, { createContext, useContext } from 'react'
import Header from '~/Header'
import Menu from '~/Menu'
import Main from '~/Main'
import Footer from '~/Footer'
import ItemInfo from '~/ItemInfo'
import { useRoutes } from 'hookrouter'

const MainPage = () => <>
    <Header/>
    <Menu />
    <Main />
    <Footer />
</>

export const routes = {
    '/':        () => <MainPage/>,
    '/footer':    () => <Footer/>,
    '/main':    () => <Main />,
    '/itemInfo': () => <ItemInfo />,
}
const defaultAppContext = {
    
}

type AppContextProps = typeof defaultAppContext
const AppContext = createContext<AppContextProps> (defaultAppContext)

export default function App () {
    return (
        <AppContext.Provider value={{}}>
            { useRoutes (routes) }
        </AppContext.Provider>
    )
}

export function useAppContext (): AppContextProps {
    return useContext (AppContext)
}

// import ItemInfo from "../ItemInfo"