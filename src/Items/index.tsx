import React from 'react'
import './index.css'
import { A } from 'hookrouter'
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
                    <A  className='product-item'
                        key={ x.partNumber }
                        href={`/item/${x.id}`}
                        style={{ backgroundImage: `url(${images[x.img]})` }} />
                )
            }
        </div>
    </div>
}
