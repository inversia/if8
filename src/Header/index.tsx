import React from 'react'
import './index.css'
import Search from '~/Search'
import { Link } from 'react-router-dom'
import { useAppContext } from '~/App/Context'

export function Header () {

    const { currentLanguage, setCurrentLanguage } = useAppContext ()

    return <div className='header-wrapper'>
        <Link className='tagline' to='/' />
        <Search />
        <Link className='logo' to='/' />
        {/*<div className='language-change-wrapper' onClick={ () => setCurrentLanguage (!currentLanguage)}>
            <span>{ currentLanguage ? 'en' : 'ru' }</span>
            <div className='language-change'/>
        </div>*/}
    </div>
}