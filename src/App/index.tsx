import React, { createContext, useContext } from 'react'
import { Header } from '~/Header'
import { Menu } from '~/Menu'
import { Main } from '~/Main'
import { Footer } from '~/Footer'
import { ItemInfo } from '~/ItemInfo'
import { Items } from '~/Items'
import { useRoutes } from 'hookrouter'
import { Category, materials, MaterialsType } from '~/data'

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
    '/item-info': () => <ItemInfo />,
    '/items/:category': ({ category = 'jewellery' as Category }, material = 'gold' as MaterialsType) => <Items category={ category } material={ material }/>
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