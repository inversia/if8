import React, { createContext, useContext } from 'react'
import { Header } from '~/Header'
import { Menu } from '~/Menu'
import { Main } from '~/Main'
import { ItemInfo } from '~/ItemInfo'
import { Items } from '~/Items'
import Contacts  from '~/Contacts'
import Cart from '~/Cart'
import { useRoutes } from 'hookrouter'
import { Category } from '~/data'

export const routes = {
    '/':            makePage (Main),
    '/contacts':    makePage (Contacts),
    '/cart':        makePage (Cart),
    '/items/:category': makePage (Items),
    '/items/:category/:subcategory': makePage (Items),
    '/items/:category/:subcategory/:material': makePage (Items),
    '/items/:category/:subcategory/:material/:id': makePage (ItemInfo),
}

function makePage (Content: React.JSXElementConstructor<Record<string, unknown>> ) {
    return function Page (props: Record<string, unknown>) {
        return <>
            <Header/>
            <Menu {...props} />
            <Content {...props} />
        </>
    }
}

const defaultAppContext = {
    
}

type AppContextProps = typeof defaultAppContext
const AppContext = createContext<AppContextProps> (defaultAppContext)

export default function App () {
    return (
        <AppContext.Provider value={{}}>
            { useRoutes (routes) || 'не найдено :(' }
        </AppContext.Provider>
    )
}

export function useAppContext (): AppContextProps {
    return useContext (AppContext)
}

// import ItemInfo from "../ItemInfo"