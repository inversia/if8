import React from 'react'
import './index.css'
import Search from '~/Search'
import { A } from 'hookrouter'

export function Header () {
    return <div className='header-wrapper'>
        <A className='tagline' href='/'></A>
        <Search />
        <A className='logo' href='/'></A>
    </div>
}