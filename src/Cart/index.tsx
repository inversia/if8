import React from 'react'
import './index.css'
import { useCartContext } from '~/Cart/Context'
import { productsById, products, FilterProps } from '~/data'
import images from '~/images'

export default function Cart () {

    const { cartItems, addToCart } = useCartContext ()

    const totalChosenProductes = Object.keys (cartItems).map (x => productsById[x])

    return <>
        <div className='cart-wrapper'>
            <div className='chosen-products'>
                {totalChosenProductes.map (prdct => <div className='chosen-item' key={prdct.id}>
                                                        <div style={{ backgroundImage: `url(${images[prdct.img]})`}}
                                                             className='item-background'/>
                                                        <div className='item-info-wrapper'>
                                                            <div className='description'>{prdct.description}</div>
                                                            <div className='price'>{prdct.price}</div>
                                                            <button className='delete'></button>
                                                        </div>
                                                    </div>
                )}
            </div>
        </div>
    </>
}