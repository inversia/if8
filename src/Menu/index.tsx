import React, { useLayoutEffect, useState } from 'react'
import './index.css'
import cls from 'classnames'
import { A, usePath } from 'hookrouter'
import { productTypes } from '~/data'
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

export function Menu () {

    const [value, setValue] = useState (0.5)

    const [dropdownVisible, setDropdownVisible] = useState (false)

    const currentPath = usePath ()
    
    const toggleDropdown = (path: string) => {
        if (dropdownVisible && currentPath.startsWith (path)) {
            setDropdownVisible (false)
        } else {
            setDropdownVisible (true)
        }
    }

    useLayoutEffect (() => {
        if (!currentPath.startsWith ('/items/')) {
            setDropdownVisible (false)
        }
    }, [currentPath])

    const isJewellery = currentPath.startsWith ('/items/jewellery')

    return <>

        <div className='menu'>
            <ul>
                <MenuLink path='/about'>о компании</MenuLink>
                <MenuLink path='/items/jewellery' onClick={toggleDropdown}>ювелирные украшения</MenuLink>
                <MenuLink path='/items/interior' onClick={toggleDropdown}>интерьер</MenuLink>

                <li  onClick={() => {
                            setTimeout (() => smoothScrollTo ('events'), 100)
                            }
                    }>события</li>
                <MenuLink path='/contacts'>контакты</MenuLink>
                <MenuLink path='/cart'>сделать заказ</MenuLink>
            </ul>
        </div>
        <div className={ cls ('dropdown-menu-container', { visible: dropdownVisible })}>
            <div className='dropdown-menu'>
                <div className='cathegories'>
                    <label>Категории</label>
                    <ul>
                        { isJewellery && <li>эксклюзивные украшения</li> }
                        { Object.entries (productTypes).map (([k, v]) => <li key={k}>{ v }</li> ) }
                        <li>Корпоративные подарки</li>
                        <li>Посмотреть всё</li>
                    </ul>
                </div>
                <div className='material'>
                    <label>Материал</label>
                    {/* <ul>
                        { uniqueMatherials.map ((x, i) => <li key={i}>{ productTypes[x] }</li> ) }
                    </ul> */}
                </div>
                <div className='price'>
                    <label>Цена</label>
                    <RubberSlider width={200} height={100} value={value} onChange={setValue} min={1} max={130000}/>
                    <p className='rating-value'>{value}</p>
                </div>
            </div>
        </div>
    </>
}