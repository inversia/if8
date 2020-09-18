import React, { useLayoutEffect, useState } from 'react'
import './index.css'
import cls from 'classnames'
import { A, usePath } from 'hookrouter'
import { Category, productTypes, materials, MaterialsType } from '~/data'
import RubberSlider from '@shwilliam/react-rubber-slider'
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

export function Menu () {

    const [value, setValue] = useState (0.5)

    const [dropdownVisible, setDropdownVisible] = useState (false)

    const { category } = parsePath (usePath ())
    
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
                <div className='cathegories'>
                    <label>Категории</label>
                    <ul>
                        { category === 'jewellery' && <li>эксклюзивные украшения</li> }
                        {/* { category && Object.entries (productTypes[category]).map (([k, v]: [string, string]) => <li key={ k }>{ v }</li> ) } */}
                        { category && Object.entries (productTypes[category]).map (([k, v]: [string, string]) => <MenuLink path={`/items/${category}/${k}`} key={ k }>{ v }</MenuLink> ) }
                        <li>Корпоративные подарки</li>
                        <li>Посмотреть всё</li>
                    </ul>
                </div>
                <div className='material'>
                    <label>Материал</label>
                    <ul>
                        { category && Object.entries (materials[category]).map (([k, v]: [string, string]) => <li key={ k }>{ v }</li> ) }
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