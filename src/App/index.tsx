import React, { createContext, useContext, useState} from 'react'
import { Header } from '~/Header'
import { HeaderMobile } from '~/HeaderMobile'
import { Menu } from '~/Menu'
import { MenuMobile } from '~/MenuMobile'
import { CartCounter } from '~/CartCounter'
import { Main } from '~/Main'
import { ItemInfo } from '~/ItemInfo'
import { Items } from '~/Items'
import Contacts  from '~/Contacts'
import Cart from '~/Cart'
import About from '~/About'
import { CartContextProvider } from '~/Cart/Context'
import { useRoutes } from 'hookrouter'
import '@shwilliam/react-rubber-slider/dist/styles.css'


export const routes = {
    '/':            makePage (Main),
    '/about':       makePage (About),
    '/contacts':    makePage (Contacts),
    '/cart':        makePage (Cart),
    '/items/:category': makePage (Items),
    '/items/:category/:subcategory': makePage (Items),
    '/items/:category/:subcategory/:material': makePage (Items),
    '/item/:id': makePage (ItemInfo),
}

function makePage (Content: React.JSXElementConstructor<Record<string, unknown>> ) {
    return function Page (props: Record<string, unknown>) {
        props = replaceAllWithUndefined (props)
        return <>
            {/* <Header/> */}
            <HeaderMobile/>
            {/* <Menu {...props} /> */}
            <MenuMobile {...props} />
            <Content {...props} />
        </>
    }
}

function replaceAllWithUndefined (props: Record<string, unknown>) {
    for (const k in props) {
        if (props[k] === 'all') props[k] = undefined
    }
    return props
}

export default function App () {
    return (
        <CartContextProvider>
            { useRoutes (routes) || 'не найдено :(' }
        </CartContextProvider>
    )
}

// import ItemInfo from "../ItemInfo"