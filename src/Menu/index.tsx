import React, { useState } from 'react'
import './index.css'
import cls from 'classnames'
import { A } from 'hookrouter'


function smoothScrollTo (hash:string) {

    const target = document.getElementById (hash)

    target.scrollIntoView ({
        behavior: 'smooth',
        block: 'nearest',
    })
}

export default function Menu () {

    const [ jewellerySelected, setJewellerySelected ] = useState<boolean> (false)
    const [ interiorSelected, setInteriorSelected]    = useState<boolean> (false)
    const [ currentItem, setCurrentItem] = useState<string> (undefined)

    const props = (id:string ) => ({

        // className: cls ({ [id && ('menu-item-' + id)]: 1, active: location.pathname === ('/' + id) }),
    
        className: cls ({ [id && ('menu-item-' + id)]: 1, active: (id === currentItem)}),
        href: '/' + id
    })

    console.log (currentItem)

    return <>
        <div className='menu'>
            <ul>
                <A  onClick={() => setCurrentItem ('about')}
                    {...props ('about')}>о компании</A>
                <A  onClick={() => {
                            setJewellerySelected (!jewellerySelected)
                            setInteriorSelected (false)
                            setCurrentItem ('jewellery')
                            }}
                    {...props ('')}>ювелирные украшения</A>
                <A  onClick={() => {
                            setInteriorSelected (!interiorSelected)
                            setJewellerySelected (false)
                            setCurrentItem ('interior')
                            }}
                    {...props ('')}>интерьер</A>
                <A  onClick={() => {
                            setTimeout (() => smoothScrollTo ('events'), 100)
                            setCurrentItem ('events')
                            }}
                    {...props ('')}>события</A>
                <A  onClick={() => setCurrentItem ('contacts')}
                    {...props ('footer')}>контакты</A>
                <A  onClick={() => setCurrentItem ('cart')}
                    {...props ('cart')}>сделать заказ</A>
            </ul>
        </div>
        <div className={ cls ('dropdown-menu', {'visible': jewellerySelected || interiorSelected })}>
            <label className='cathegories'>

            </label>
            <label className='material'>

            </label>
        </div>
    </>
}