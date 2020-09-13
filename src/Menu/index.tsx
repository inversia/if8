import React, { useState } from 'react'
import './index.css'
import cls from 'classnames'
import { useRoutes, usePath } from 'hookrouter'
import Main from '~/Main'
import Footer from '~/Footer'

const routes = {
    '/':           () => {},
    '/foot':    () => <Footer/>,
}

export default function Menu () {

    // const [itemSelected, setItemSelected] = useState (false)
    const [ jewellerySelected, setJewellerySelected ] = useState (false)
    const [ interiorSelected, setInteriorSelected]    = useState (false)

    // <div className={ cls ('search', className, { 'error': error && input === value }) }></div>

    return <>
        <div className='menu'>
            <ul>
                <li>о компании</li>
                <li onClick={() => {
                                    setJewellerySelected (!jewellerySelected)
                                    setInteriorSelected (false)
                                    }}>ювелирные украшения
                </li>
                <li onClick={() => {
                                    setInteriorSelected (!interiorSelected)
                                    setJewellerySelected (false)
                                    }}>интерьер
                </li>
                <li>события</li>
                <li>контакты</li>
                <li>сделать заказ</li>
            </ul>
        </div>
        <div className={ cls ('dropdown-menu', {'visible': jewellerySelected || interiorSelected })}>

        </div>
    </>
}