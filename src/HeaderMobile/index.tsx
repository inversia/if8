import React from 'react'
import './index.css'
import Search from '~/Search'
import { A } from 'hookrouter'

export function HeaderMobile () {
    return <div className='mobile-header-wrapper'>
        <div className='tagline-and-search'>
            <Search />
            <A className='tagline' href='/'/>
        </div>
        <A className='logo' href='/'/>
    </div>
}