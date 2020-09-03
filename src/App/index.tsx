import React from 'react'
import Header from '~/Header'
import Menu from '~/Menu'
import Main from '~/Main'
import Footer from '~/Footer'
// import { useRoutes, usePath } from 'hookrouter'

export default function App () {
    return <>
        <Header/>
        <Menu />
        <Main />
        <Footer />
    </>
}

// import ItemInfo from "../ItemInfo"