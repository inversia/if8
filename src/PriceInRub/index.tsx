import React from 'react'
import './index.css'

export default function PriceInRub ({price = 1}) {
    
    return <>
        <span className='price-in-rub'>{ price.toString ().replace (/\B(?=(\d{3})+(?!\d))/g, ' ') }</span>
        <span className='currency'>P</span>
    </>
}