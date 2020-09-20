import React from 'react'
import './index.css'
import { products, Product, FilterProps, FilterProp } from '~/data'
import images from '~/images'

function productMatches (item: Product, filterProps: FilterProps) {
    for (const k of ['category', 'subcategory', 'material'] as FilterProp[]) {
        if (filterProps[k] && item[k] !== filterProps[k]) return false
    }
    return true
}

export function Items (filterProps: FilterProps) {

    return <div className='items-wrapper'>
        <div className='items-container'>
            {products
                .filter (x => productMatches (x, filterProps))
                .map ((x) =>
                    <div className='product-item'
                            key={ x.partNumber }
                            style={{ backgroundImage: `url(${images[x.img]})` }}
                            onClick={() => alert (filterProps.subcategory)} />
                )
            }
        </div>
    </div>
}