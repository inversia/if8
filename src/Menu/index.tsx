import React, { useState } from 'react'
import './index.css'
import cls from 'classnames'
import { A } from 'hookrouter'
import jewellery from '~/data/jewellery'
import interior from '~/data/interior'


function smoothScrollTo (hash:string) {

    const target = document.getElementById (hash)

    target.scrollIntoView ({
        behavior: 'smooth',
        block: 'nearest',
    })
}

type Product = [
   
    {
        type: string,
        matherial: string,
        description: string,
        probe: number,
        partNumber: number,
        price:number,
        availability: number,
        colors:[[string, string]],
        img:string,
        id:number
    }
]

type Products = {
    [key:string]: Product,
}

const products = {
    jewellery,
    interior
}


export default function Menu () {

    const [ jewellerySelected, setJewellerySelected ] = useState<boolean> (false)
    const [ interiorSelected, setInteriorSelected]    = useState<boolean> (false)
    const [ currentItem, setCurrentItem] = useState<string> ('interior')

    const props = (id:string ) => ({
    
        className: cls ({ [id && ('menu-item-' + id)]: 1, active: (id === currentItem)}),
        href: '/' + id
    })

    const productsTypes = (currentItem && (products[currentItem] as Product)).map ( x => x.type )

    // const uniqueTypes = [...new Set (productsTypes)]  TODO: как пофиксить этот более преимущественный вариант

    const uniqueTypes:string[] = productsTypes.filter ((x, i) => productsTypes.indexOf (x) === i)
    

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
            <label className='cathegories'>Категории
                <ul>
                    {uniqueTypes.map ((x, i) => <li key={i}>{x}</li> )}
                </ul>
            </label>
            <label className='material'>Материал

            </label>
            <label>Цена</label>
        </div>
    </>
}