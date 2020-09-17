import React from 'react'
import './index.css'
import Search from '~/Search'

export function Header () {
    return <div className='header-wrapper'>
        <div className='tagline'></div>
        <Search />
        <div className='logo'></div>
    </div>
}