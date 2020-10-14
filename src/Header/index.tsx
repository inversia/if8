import React from 'react'
import './index.css'
import Search from '~/Search'
import { Link } from 'react-router-dom'

export function Header () {
    return <div className='header-wrapper'>
        <Link className='tagline' to='/' />
        <Search />
        <Link className='logo' to='/' />
    </div>
}