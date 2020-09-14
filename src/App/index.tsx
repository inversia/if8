import React from 'react'
import Header from '~/Header'
import Menu from '~/Menu'
import Main from '~/Main'
import Footer from '~/Footer'
import ItemInfo from '~/ItemInfo'
import { useRoutes, usePath } from 'hookrouter'

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

export default function App () {
    return <>
        { useRoutes (routes) }
    </>
}

// import ItemInfo from "../ItemInfo"