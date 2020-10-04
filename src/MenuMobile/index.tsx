import React, { createContext, useRef, useLayoutEffect, useState, useCallback, useContext } from 'react'
import './index.css'
import cls from 'classnames'
import { A, usePath } from 'hookrouter'
import { CartCounter } from '~/CartCounter'
import { Category, subcategories, materials, FilterProps } from '~/data'
import { useOnClickOutside } from 'use-hooks'
// import RubberSlider from '@shwilliam/react-rubber-slider'
import '@shwilliam/react-rubber-slider/dist/styles.css'

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
    component = A as (typeof A | string),
    children = null as React.ReactChild,
    onClick = (_e: React.MouseEvent) => {}
}) {
    const currentPath = usePath ()
    const className = path.replace (/\//g, '_')
    const active = currentPath.startsWith (path)
    const { hideDropdown } = useContext (MenuContext)

    return React.createElement (component, {
        className: cls ({ active, [('menu-item-' + className)]: 1 }),
        href: path,
        onClick: (e) => { hideDropdown (); onClick (e) }
    }, children)
}

export function MenuMobile ({ category, subcategory, material, id }: FilterProps) {

    const [value, setValue] = useState (0.5)

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

    return <MenuContext.Provider value={{ hideDropdown }}>
        <div ref={menuContainerRef} className='mob-menu-container'>
            <div className='m-menu'>
                <ul>
                    <MenuLink path='/contacts'/>
                    <MenuLink path='/about'>о нас</MenuLink>
                    <MenuLink component='a' path={`/items/jewellery/${subcategory}`} onClick={toggleDropdown ('jewellery')}>украшения</MenuLink>
                    <MenuLink component='a' path={`/items/interior/${subcategory}`}  onClick={toggleDropdown ('interior')} >интерьер</MenuLink>
                    <MenuLink path='/#events'         onClick={() => { setTimeout (() => smoothScrollTo ('events'), 100) }}>события</MenuLink>
                    <MenuLink path='/cart'><CartCounter/></MenuLink>
                </ul>
            </div>
        <div className={ cls ('dropdown-menu-container', { visible: !!dropdownCategory })} onClick={hideIfClickedAtBottom}>
            <div className='dropdown-menu'>
                <div className='categories'>
                    <label>Категории</label>
                    <ul>
                        <MenuLink path={`/items/${dropdownCategory}/all`}>все</MenuLink>
                        <div className='subcategories'>{
                            dropdownCategory && Object.entries (subcategories[dropdownCategory]).map (([subcategory, label]: [string, string]) =>
                                <MenuLink path={`/items/${dropdownCategory}/${subcategory}`} key={ subcategory }>{ label }</MenuLink>
                            )
                        }</div>
                    </ul>
                </div>
                <div className='materials'>
                    <label>Материал</label>
                    <ul>
                        <MenuLink path={`/items/${dropdownCategory}/${subcategory || 'all'}`} key={ material }>все</MenuLink>
                        {dropdownCategory && Object.entries (materials[dropdownCategory]).map (([material, label]: [string, string]) =>
                            <MenuLink path={`/items/${dropdownCategory}/${subcategory || 'all'}/${material}`} key={ material }>{ label }</MenuLink>)}
                    </ul>
                </div>
                {/* <div className='price'>
                    <label>Цена</label>
                    <p className='rating-value'>{value}</p>
                </div> */}
            </div>
        </div>
    </div>
    </MenuContext.Provider>
}