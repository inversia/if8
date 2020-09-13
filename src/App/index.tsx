import React from 'react'
import Header from '~/Header'
import Menu from '~/Menu'
import Main from '~/Main'
import Footer from '~/Footer'
import { useRoutes, usePath } from 'hookrouter'

const MainPage = () => <>
    <Header/>
    <Menu />
    <Main />
    <Footer />
</>

const routes = {
    '/':        () => <MainPage/>,
    '/foot':    () => <Footer/>,
    '/main':    () => <Main />
    'itemInfo': () => <ItemInfo />,
    // '/service':    () => <Service/>,
}

export default function App () {
    return <>
        { useRoutes (routes) }
    </>
}

// import ItemInfo from "../ItemInfo"