import React, { useContext } from 'react'
import { HeaderMobile } from '~/HeaderMobile'
import { Header } from '~/Header'
import { MenuMobile } from '~/MenuMobile'
import { Menu } from '~/Menu'
import { Main } from '~/Main'
import { ItemInfo } from '~/ItemInfo'
import { Items } from '~/Items'
import Contacts  from '~/Contacts'
import Cart from '~/Cart'
import About from '~/About'
import { CartContextProvider, useCartContext } from '~/Cart/Context'
import { useRoutes } from 'hookrouter'
import '@shwilliam/react-rubber-slider/dist/styles.css'
import { AppContextProvider, useAppContext } from './Context'


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

    function Page (props: Record<string, unknown>) {

        const { isMobile, windowWidth } = useAppContext ()
        
        return <>
            {/* <h1>{JSON.stringify({ isMobile, windowWidth })}</h1> */}
            {isMobile ? <><HeaderMobile/><MenuMobile {...props} /></> : <><Header/><Menu {...props} /></>}
            <Content {...props} />
    
        </>
    }

    return (props: Record<string, unknown>) => <Page {...props} />
}

function replaceAllWithUndefined (props: Record<string, unknown>) {

    for (const k in props) {
        if (props[k] === 'all') props[k] = undefined
    }
    return props
}

export default function App () {
    const content = useRoutes (routes) as React.ReactNode

    return (
        <AppContextProvider>
            <CartContextProvider>
                <div>{ content || 'не найдено :(' }</div>
            </CartContextProvider>
        </AppContextProvider>
    )
}