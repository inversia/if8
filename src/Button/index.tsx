import React, { useCallback } from 'react'
import Ripple from 'react-material-ripple'

import './index.css'
import icons from '~/icons'

const ButtonIcon = ({ mask }: { mask: string }) => (
    <span className='icon'>
        <img src={ icons.cart } alt='' title=''/>
        <i style={{ maskImage: mask, WebkitMaskImage: mask }}></i>
    </span>
)

const Button = ({

    children = null as React.ReactNode | Array<React.ReactNode>,
    onClick = (_: React.MouseEvent) => {},
    icon = '',
    inverted = false,
    disabled = false,
    href = '',
    className = ''

}) => {

                  className += ' button'
    if (disabled) className += ' disabled'
    else          className += ' click-animation'
    if (inverted) className += ' inverted'

    const onClickCallback = useCallback (
        (e: React.MouseEvent) => { e.preventDefault (); return onClick (e) },
        [onClick]
    )

    const ButtonContent = (
        <a href={ href || '#' } onClick={ href ? undefined : onClickCallback }>
            { icon in icons ? <ButtonIcon mask={ `url(${ icons[icon] })` }/> : null }
            <span className='title'>{ children }</span>
        </a>
    )

    return disabled ? (
        <div className={ className }>{ ButtonContent }</div>
    ) : (
        <Ripple className={ className }>{ ButtonContent }</Ripple>
    )
}

export default Button
