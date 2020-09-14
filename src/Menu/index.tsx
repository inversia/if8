import React, { useState } from 'react'
import './index.css'
import cls from 'classnames'
import { A } from 'hookrouter'


const props = (id:string) => ({

    className: cls ({ [id && ('menu-item-' + id)]: 1, active: location.pathname === ('/' + id) }),
    href: '/' + id
})

function smoothScrollTo (hash:string) {

    const target = document.getElementById (hash)

    target.scrollIntoView ({
        behavior: 'smooth',
        block: 'nearest',
    })
}

export default function Menu () {

    const [ jewellerySelected, setJewellerySelected ] = useState (false)
    const [ interiorSelected, setInteriorSelected]    = useState (false)

    // <div className={ cls ('search', className, { 'error': error && input === value }) }></div>

    return <>
        <div className='menu'>
            <ul>
                <A href=''  {...props ('about')}>о компании</A>
                <A href=''  onClick={() => {
                                    setJewellerySelected (!jewellerySelected)
                                    setInteriorSelected (false)
                                    }}
                            {...props ('jewellery')}>ювелирные украшения
                </A>
                <A href=''  onClick={() => {
                                    setInteriorSelected (!interiorSelected)
                                    setJewellerySelected (false)
                                    }}
                            {...props ('interior')}>интерьер
                                    
                </A>
                <A {...props ('')} onClick={() => setTimeout (() => smoothScrollTo ('events'), 100)}>события</A>
                <A {...props ('footer')}>контакты</A>
                <A {...props ('cart')}>сделать заказ</A>
            </ul>
        </div>
        <div className={ cls ('dropdown-menu', {'visible': jewellerySelected || interiorSelected })}>
            <label className='cathegories'></label>
            <label className='material'></label>
        </div>
    </>
}