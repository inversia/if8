import React, { useLayoutEffect, useState } from 'react'
import './index.css'
import cls from 'classnames'
import { A, usePath } from 'hookrouter'
import { Category, subcategories, materials, FilterProps } from '~/data'
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

function parsePath (path: string): { category?: Category } {
    const [, page, category] = path.split ('/')
    return {
        category: page === 'items' ? (category as Category) : undefined
    }
}

export function Menu ({ category, subcategory, material, id }: FilterProps) {

    const [value, setValue] = useState (0.5)

    const [dropdownVisible, setDropdownVisible] = useState (false)
    
    const toggleDropdown = (path: string) => {

        if (dropdownVisible && category === parsePath (path).category) {
            setDropdownVisible (false)
        } else {
            setDropdownVisible (true)
        }
    }

    useLayoutEffect (() => {
        if (!category) setDropdownVisible (false)
    }, [category])

    return <>
        <div className='menu'>
            <ul>
                <MenuLink path='/about'>о компании</MenuLink>
                <MenuLink path='/items/jewellery' onClick={toggleDropdown}>ювелирные украшения</MenuLink>
                <MenuLink path='/items/interior'  onClick={toggleDropdown}>интерьер</MenuLink>
                <MenuLink path='/'  onClick={() => {
                                        setTimeout (() => smoothScrollTo ('events'), 100)
                                    }}>события</MenuLink>
                <MenuLink path='/contacts'>контакты</MenuLink>
                <MenuLink path='/cart'>сделать заказ</MenuLink>
            </ul>
        </div>
        <div className={ cls ('dropdown-menu-container', { visible: dropdownVisible })}>
            <div className='dropdown-menu'>
                <div className='categories'>
                    <label>Категории</label>
                    <ul>
                        <MenuLink path={`/items/${category}/exclusive`}>эксклюзивные украшения</MenuLink>
                        <div className='subcategories'>{
                            category && Object.entries (subcategories[category]).map (([subcategory, label]: [string, string]) =>
                                <MenuLink path={`/items/${category}/${subcategory}`} key={ subcategory }>{ label }</MenuLink>
                            )
                        }</div>
                        <MenuLink path={`/items/${category}/corporate`}>корпоративные подарки</MenuLink>
                        <MenuLink path={`/items/${category}/all`}>все</MenuLink>
                    </ul>
                </div>
                <div className='materials'>
                    <label>Материал</label>
                    <ul>{
                        category && Object.entries (materials[category]).map (([material, label]: [string, string]) =>
                            <MenuLink path={`/items/${category || 'all'}/${subcategory || 'all'}/${material}`} key={ material }>{ label }</MenuLink>
                        )
                    }
                        <MenuLink path={`/items/${category || 'all'}/${subcategory || 'all'}`} key={ material }>все</MenuLink>
                    </ul>
                </div>
                <div className='price'>
                    <label>Цена</label>
                    {/* <RubberSlider width={200} height={100} value={value} onChange={setValue} min={1} max={130000}/> */}
                    <p className='rating-value'>{value}</p>
                </div>
            </div>
        </div>
    </>
}