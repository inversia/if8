import React from 'react'
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
import { CartContextProvider } from '~/Cart/Context'
import '@shwilliam/react-rubber-slider/dist/styles.css'
import { AppContextProvider, useAppContext } from './Context'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function makePage (Content: React.JSXElementConstructor<Record<string, unknown>> ) {

    function Page (props: Record<string, unknown>) {
        const { isMobile, priceValue } = useAppContext ()

        props = { ...props, priceValue }
        
        return <>
            {isMobile ? <><HeaderMobile/><MenuMobile {...props} /></> : <><Header/><Menu {...props} /></>}
            <Content {...props} />
        </>
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (props: any) => <Page {...replaceAllWithUndefined (props.match.params)} />
}

function replaceAllWithUndefined (props: Record<string, unknown>) {

    for (const k in props) {
        if (props[k] === 'all') props[k] = undefined
    }
    return props
}

export default function App () {
    return (
        <AppContextProvider>
            <CartContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={makePage (Main)} />
                        <Route exact path="/about" component={makePage (About)} />
                        <Route exact path="/contacts" component={makePage (Contacts)} />
                        <Route exact path="/cart" component={makePage (Cart)} />
                        <Route exact path="/items/:category" component={makePage (Items)} />
                        <Route exact path="/items/:category/:subcategory" component={makePage (Items)} />
                        <Route exact path="/items/:category/:subcategory/:material" component={makePage (Items)} />
                        <Route exact path="/item/:id" component={makePage (ItemInfo)} />
                    </Switch>
                </Router>
            </CartContextProvider>
        </AppContextProvider>
    )
}