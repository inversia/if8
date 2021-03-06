import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { products, Product, FilterProps, FilterProp } from '~/data'
import images from '~/images'
import NavigationBar from '~/NavigationBar'

function productMatches (item: Product, filterProps: FilterProps) {

    if (item.price > filterProps.priceValue) return false

    for (const k of ['category', 'subcategory', 'material'] as FilterProp[]) {
        if (filterProps[k] && item[k] !== filterProps[k]) return false
    }
    return true
}

export function Items (filterProps: FilterProps) {

    return <div className='items-wrapper'>
        <NavigationBar />
        <div className='items-container'>
            {products
                .filter (x => productMatches (x, filterProps))
                .map ((x) =>
                    <Link className='product-item'
                        key={ x.partNumber }
                        to={`/item/${x.id}`}
                        style={{ backgroundImage: `url(${images[x.img[0]]})` }} />
                )
            }
        </div>
    </div>
}
