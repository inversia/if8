// import RubberSlider from '@shwilliam/react-rubber-slider'
// import '@shwilliam/react-rubber-slider/dist/styles.css'

import React, { createContext, useRef, useLayoutEffect, useState, useCallback, useContext } from 'react'
import './index.css'
import cls from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { CartCounter } from '~/CartCounter'
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

const MMenuContext = createContext ({ hideMDropdown: () => {} })

function MMenuLink ({
    path = '',
    component = Link as (typeof Link | string),
    children = null as React.ReactChild,
    onClick = (_e: React.MouseEvent) => {}
}) {
    const currentPath = useLocation ().pathname
    const className = path.replace (/\//g, '_')
    const active = currentPath.startsWith (path)
    const { hideMDropdown } = useContext (MMenuContext)

    return React.createElement (component, {
        className: cls ({ active, [('m-menu-item-' + className)]: 1 }),
        to: path,
        onClick: (e) => { hideMDropdown (); onClick (e) }
    }, children)
}

export function MenuMobile ({ category, subcategory, material }: FilterProps) {

    const [mDropdownCategory, setMDropdownCategory] = useState<Category|null> ()
    
    const hideMDropdown = () => setMDropdownCategory (null)

    const toggleMDropdown = (newCategory: Category|null) => {

        return function onClick (e: React.MouseEvent) {

            if (mDropdownCategory && mDropdownCategory === newCategory) {
                hideMDropdown ()
            } else {
                setMDropdownCategory (newCategory)
            }
            e.preventDefault ()
        }
    }

    const mMenuContainerRef = useRef<HTMLDivElement> ()
    
    useOnClickOutside (mMenuContainerRef, () => {
        hideMDropdown ()
    })

    const hideIfClickedAtBottom = useCallback ((e: React.MouseEvent) => {
        
        const distanceFromBottom = e.currentTarget.getBoundingClientRect ().bottom - e.clientY
        const distanceFromBottomRel = distanceFromBottom / e.currentTarget.clientHeight // relative to height (0...1)
        if (distanceFromBottomRel < 0.24) {
            hideMDropdown ()
        }
    }, [])

    useLayoutEffect (() => {
        
        if (!category) hideMDropdown ()
    }, [category])

    const { priceValue, setPriceValue } = useAppContext ()

    return <MMenuContext.Provider value={{ hideMDropdown }}>
        <div ref={mMenuContainerRef} className='mob-menu-container'>
            <div className='m-menu'>
                <ul>
                    <MMenuLink path='/contacts'/>
                    <MMenuLink path='/about'>о нас</MMenuLink>
                    <MMenuLink component='a' path={`/items/jewellery/${subcategory}`} onClick={ toggleMDropdown ('jewellery')}>украшения</MMenuLink>
                    {/* <MMenuLink component='a' path={`/items/interior/${subcategory}`}  onClick={ toggleMDropdown ('interior')} >интерьер</MMenuLink> */}
                    <MMenuLink path='/#events'         onClick={() => { setTimeout (() => smoothScrollTo ('events'), 100) }}>события</MMenuLink>
                    <MMenuLink path='/cart'><CartCounter/></MMenuLink>
                </ul>
            </div>
        <div className={ cls ('m-dropdown-menu-container', { visible: !!mDropdownCategory })} onClick={hideIfClickedAtBottom}>
            <div className='m-dropdown-menu'>
                <div className='categories'>
                    <label>Категории</label>
                    <ul>
                        <MMenuLink path={`/items/${mDropdownCategory}/all`}>все</MMenuLink>
                        <div className='subcategories'>{
                            mDropdownCategory && Object.entries (subcategories[mDropdownCategory]).map (([subcategory, label]: [string, string]) =>
                                <MMenuLink path={`/items/${mDropdownCategory}/${subcategory}`} key={ subcategory }>{ label }</MMenuLink>
                            )
                        }</div>
                    </ul>
                </div>

                <div className='m-price'>
                    <label>Цена</label>
                    <p className='rating-value'> { priceValue ? `до ${ priceValue } рублей` : 'в рублях' }</p>
                    <input onChange={(e) => setPriceValue (Number (e.target.value))} type='range' min='16800' max='244060' defaultValue='210500' className='m-slider'></input>
                </div>

                <div className='m-materials'>
                    <label>Материал</label>
                    <ul>
                        <MMenuLink path={`/items/${mDropdownCategory}/${subcategory || 'all'}`} key={ material }>все</MMenuLink>
                        {mDropdownCategory && Object.entries (materials[mDropdownCategory]).map (([material, label]: [string, string]) =>
                            <MMenuLink path={`/items/${mDropdownCategory}/${subcategory || 'all'}/${material}`} key={ material }>{ label }</MMenuLink>)}
                    </ul>
                </div>
                {/* <div className='price'>
                    <label>Цена</label>
                    <input onChange={(e) => setPriceValue (Number (e.target.value))} type='range' min='50' max='1000' defaultValue='500' className='slider'></input>
                    { priceValue && <p className='rating-value'>до { priceValue } рублей</p>}
                </div> */}
            </div>
        </div>
    </div>
    </MMenuContext.Provider>
}