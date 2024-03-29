// import RubberSlider from '@shwilliam/react-rubber-slider'
// import '@shwilliam/react-rubber-slider/dist/styles.css'

import React, { createContext, useRef, useLayoutEffect, useState, useCallback, useContext } from 'react'
import './index.css'
import cls from 'classnames'
import { CartCounter } from '~/CartCounter'
import { Link, useLocation } from 'react-router-dom'
import { Category, subcategories, materials, FilterProps } from '~/data'
import { useOnClickOutside } from 'use-hooks'
import { useAppContext } from '~/App/Context'

function smoothScrollTo (hash:string) {

    const target = document.getElementById (hash)

    target.scrollIntoView ({
        behavior: 'smooth',
        block: 'nearest',
    })
}

const MenuContext = createContext ({ hideDropdown: () => {} })

function MenuLink ({
    path = '',
    component = Link as (typeof Link | string),
    children = null as React.ReactChild,
    onClick = (_e: React.MouseEvent) => {}
}) {
    const currentPath = useLocation ().pathname
    const className = path.replace (/\//g, '_')
    const active = currentPath.startsWith (path)
    const { hideDropdown } = useContext (MenuContext)

    return React.createElement (component, {
        className: cls ({ active, [('menu-item-' + className)]: 1 }),
        to: path,
        onClick: (e) => { hideDropdown (); onClick (e) }
    }, children)
}

export function Menu ({ category, subcategory, material }: FilterProps) {

    const [dropdownCategory, setDropdownCategory] = useState<Category|null> ()

    const hideDropdown = () => setDropdownCategory (null)

    const toggleDropdown = (newCategory: Category|null) => {

        return function onClick (e: React.MouseEvent) {

            if (dropdownCategory && dropdownCategory === newCategory) {
                hideDropdown ()
            } else {
                setDropdownCategory (newCategory)
            }
            e.preventDefault ()
        }
    }

    const menuContainerRef = useRef<HTMLDivElement> ()

    useOnClickOutside (menuContainerRef, () => {
        hideDropdown ()
    })

    const hideIfClickedAtBottom = useCallback ((e: React.MouseEvent) => {

        const distanceFromBottom = e.currentTarget.getBoundingClientRect ().bottom - e.clientY
        const distanceFromBottomRel = distanceFromBottom / e.currentTarget.clientHeight // relative to height (0...1)

        if (distanceFromBottomRel < 0.24) {
            hideDropdown ()
        }
    }, [])

    useLayoutEffect (() => {

        if (!category) hideDropdown ()
    }, [category])

    const { priceValue, setPriceValue } = useAppContext ()
    // const { currentLanguage } = useAppContext ()
    const { currentLanguage, setCurrentLanguage } = useAppContext ()

    return <MenuContext.Provider value={{ hideDropdown }}>
        <div ref={menuContainerRef} className='menu-container'>
            <div className='menu'>

                <ul>
                    <div className='language-change-wrapper' onClick={ () => setCurrentLanguage (!currentLanguage)}>
                        <span>{ currentLanguage ? 'en' : 'ru' }</span>
                        <div className='language-change'/>
                    </div>
                    <MenuLink path='/about'>{ currentLanguage ? 'about' : 'о компании'}</MenuLink>
                    <MenuLink component='a' path={`/items/jewellery/${subcategory}`} onClick={ toggleDropdown ('jewellery')}>{ currentLanguage ? 'jewellery' : 'ювелирные украшения' }</MenuLink>
                    {/* <MenuLink component='a' path={`/items/interior/${subcategory}`}  onClick={ toggleDropdown ('interior')} >интерьер</MenuLink> */}
                    <MenuLink path='/#events'                      onClick={() => { setTimeout (() => smoothScrollTo ('events'), 100) }}>{ currentLanguage ? 'events' : 'события'}</MenuLink>
                    <MenuLink path='/contacts'>{ currentLanguage ? 'contacts' : 'контакты'}</MenuLink>
                    <MenuLink path='/cart'>{ currentLanguage ? 'order' : 'сделать заказ'}</MenuLink><CartCounter/>
                </ul>
            </div>
        <div className={ cls ('dropdown-menu-container', { 'visible': !!dropdownCategory })} onClick={ hideIfClickedAtBottom }>
            <div className='dropdown-menu'>
                <div className='categories'>
                    <label>{ currentLanguage ? 'Categories' : 'Категории'}</label>
                    <ul>
                        <MenuLink path={`/items/${dropdownCategory}/all`}>{ currentLanguage ? 'all': 'все' }</MenuLink>
                        <div className='subcategories'>{
                            dropdownCategory && Object.entries (subcategories[dropdownCategory]).map (([subcategory, label]: [string, string[]]) =>
                                <MenuLink path={`/items/${dropdownCategory}/${subcategory}`} key={ subcategory }>{ label[+currentLanguage] }</MenuLink>
                            )
                        }</div>
                    </ul>
                </div>
                <div className='materials'>
                    <label>{ currentLanguage ? 'Material' : 'Материал'}</label>
                    <ul>
                        <MenuLink path={`/items/${ dropdownCategory }/${ subcategory || 'all' }`} key={ material }>{ currentLanguage ? 'all': 'все'}</MenuLink>
                        { dropdownCategory && Object.entries (materials[dropdownCategory]).map (([material, label]: [string, string []]) =>
                        <MenuLink path={`/items/${dropdownCategory}/${ subcategory || 'all' }/${ material }`} key={ material }>{ label[+currentLanguage] }</MenuLink>)}
                    </ul>
                </div>
                <div className='price'>
                    <label>{ currentLanguage ? 'Price' : 'Цена'}</label>
                    <input onChange={(e) => setPriceValue (Number (e.target.value))} type='range' min='16800' max='427020' defaultValue='210500' className='slider'></input>
                    <p className='rating-value'> { priceValue ? ( currentLanguage ? `up to ${priceValue} rubles` : `до ${ priceValue } рублей`) : (currentLanguage ? 'in rubles' : 'в рублях')}</p>
                </div>
            </div>
        </div>
    </div>
    </MenuContext.Provider>
}