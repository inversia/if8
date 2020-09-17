import React from 'react'
import './index.css'
// import cls from 'classnames'
import { Header } from '~/Header'
import { Menu } from '~/Menu'
import { categories, Category } from '~/data'

import images from '~/images'

export function Items ({ category = 'jewellery' as Category }) {

    return <div className='items-wrapper'>
        <Header />
        <Menu />
        <div className='items-container'>
            {categories[category].map ((x) =>
                <div className='product-item'
                    key={ x.partNumber }
                    style={{ backgroundImage: `url(${images[x.img]})` }}><p>{x.description}</p></div>)}
        </div>
    </div>
}