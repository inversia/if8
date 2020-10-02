import React, { useRef, useEffect } from 'react'
import './index.css'
import { useCartContext } from '~/Cart/Context'
import cls from 'classnames'


export function CartCounter () {

    const el = useRef<HTMLDivElement> ()

    const { totalItems, cartItems } = useCartContext ()

    const notEmpty = totalItems > 0

    const offsets = [0, 0.3, 0, 0.08, 0.2, 0, 0, 0, 0.05, 0, 0]
    const offset = offsets[cartItems.length] || 0

    useEffect (() => {

        if (el.current) {
            el.current.classList.remove ('pulse-alert')
            el.current.getBoundingClientRect () // вызывает reflow для рестарта анимации pulse-alert
            el.current.classList.add ('pulse-alert')
        }
        
    }, [totalItems])

    return <>
        { notEmpty && <div ref={el} className={ cls ({ 'cart-counter': 1, 'more-than-10': totalItems > 9, 'more-than-20':  totalItems > 19 }) }
             onAnimationEnd={ e => { e.currentTarget.classList.remove ('pulse-alert')} }
             style={{paddingRight: `${offset}vw`}}>
            <span>{ totalItems }</span>
        </div>}
    </>
}
