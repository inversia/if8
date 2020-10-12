import React from 'react'
import './index.css'
import Search from '~/Search'
import { Link } from 'react-router-dom'

export function HeaderMobile () {
    return <div className='mobile-header-wrapper'>
        <div className='tagline-and-search'>
            <Search />
            <Link className='mobile-tagline' to='/'/>
        </div>
        <Link className='mobile-logo' to='/'/>
    </div>
}