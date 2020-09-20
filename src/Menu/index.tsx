import React, { useRef, useLayoutEffect, useState, useCallback } from 'react'
import './index.css'
import cls from 'classnames'
import { A, usePath } from 'hookrouter'
import { Category, subcategories, materials, FilterProps } from '~/data'
import {useOnClickOutside} from 'use-hooks'
// import RubberSlider from '@shwilliam/react-rubber-slider'
import '@shwilliam/react-rubber-slider/dist/styles.css'

function smoothScrollTo (hash:string) {

    const target = document.getElementById (hash)

    target.scrollIntoView ({
        behavior: 'smooth',
        block: 'nearest',
    })
}

function MenuLink ({
    path = '',
    children = null as React.ReactChild,
    onClick = (_path: string) => {}
}) {
    const currentPath = usePath ()
    const className = path.replace (/\//g, '_')
    const active = currentPath.startsWith (path)

    return (
        <A
            className={ cls ({ active, [('menu-item-' + className)]: 1 }) }
            href={path}
            onClick={() => onClick (path)}
        >
            {children}
        </A>
    )
}

export function Menu ({ category, subcategory, material, id }: FilterProps) {

    const [value, setValue] = useState (0.5)

    const [dropdownCategory, setDropdownCategory] = useState<Category|null> ()
    
    const toggleDropdown = (newCategory: Category|null) => {
        if (dropdownCategory && dropdownCategory === newCategory) {
            setDropdownCategory (null)
        } else {
            setDropdownCategory (newCategory)
        }
    }

    const menuContainerRef = useRef<HTMLDivElement> ()
    useOnClickOutside (menuContainerRef, () => {
        setDropdownCategory (null)
    })

    const hideIfClickedAtBottom = useCallback ((e: React.MouseEvent) => {
        const distanceFromBottom = e.currentTarget.getBoundingClientRect ().bottom - e.clientY
        const distanceFromBottomRel = distanceFromBottom / e.currentTarget.clientHeight // relative to height (0...1)
        if (distanceFromBottomRel < 0.24) {
            setDropdownCategory (null)
        }
    }, [])

    useLayoutEffect (() => {
        if (!category) setDropdownCategory (null)
    }, [category])

    return <div ref={menuContainerRef} className="menu-container">
        <div className='menu'>
            <ul>
                <MenuLink path='/about'>о компании</MenuLink>
                <li onClick={() => toggleDropdown ('jewellery')}>ювелирные украшения</li>
                <li onClick={() => toggleDropdown ('interior')}>интерьер</li>
                <MenuLink path='/'  onClick={() => {
                                        setTimeout (() => smoothScrollTo ('events'), 100)
                                    }}>события</MenuLink>
                <MenuLink path='/contacts'>контакты</MenuLink>
                <MenuLink path='/cart'>сделать заказ</MenuLink>
            </ul>
        </div>
        <div className={ cls ('dropdown-menu-container', { visible: !!dropdownCategory })} onClick={hideIfClickedAtBottom}>
            <div className='dropdown-menu'>
                <div className='categories'>
                    <label>Категории</label>
                    <ul>
                        <MenuLink path={`/items/${dropdownCategory}/exclusive`}>эксклюзивные украшения</MenuLink>
                        <div className='subcategories'>{
                            dropdownCategory && Object.entries (subcategories[dropdownCategory]).map (([subcategory, label]: [string, string]) =>
                                <MenuLink path={`/items/${dropdownCategory}/${subcategory}`} key={ subcategory }>{ label }</MenuLink>
                            )
                        }</div>
                        <MenuLink path={`/items/${dropdownCategory}/corporate`}>корпоративные подарки</MenuLink>
                        <MenuLink path={`/items/${dropdownCategory}/all`}>все</MenuLink>
                    </ul>
                </div>
                <div className='materials'>
                    <label>Материал</label>
                    <ul>{
                        dropdownCategory && Object.entries (materials[dropdownCategory]).map (([material, label]: [string, string]) =>
                            <MenuLink path={`/items/${dropdownCategory}/${subcategory || 'all'}/${material}`} key={ material }>{ label }</MenuLink>
                        )
                    }
                        <MenuLink path={`/items/${dropdownCategory}/${subcategory || 'all'}`} key={ material }>все</MenuLink>
                    </ul>
                </div>
                <div className='price'>
                    <label>Цена</label>
                    {/* <RubberSlider width={200} height={100} value={value} onChange={setValue} min={1} max={130000}/> */}
                    <p className='rating-value'>{value}</p>
                </div>
            </div>
        </div>
    </div>
}