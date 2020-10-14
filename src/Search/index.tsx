import React, { useState } from 'react'
import cls from 'classnames'
import debounce from 'lodash.debounce'
import './index.css'
import { products, Product } from '~/data'
import images from '~/images'

export default function Search ({
    
    onChange = (_value: string) => {},
    value = '',
    className = '',
    buttonText = undefined as string,
    error = ''}) {

    const [input, setInput] = useState<string> (value)

    if (!buttonText) {
        onChange = debounce (onChange, 1000)
    }

    function itemFilter (item: Product) {
        
        const string = input.toLowerCase ()
        return item.title.toLowerCase ().includes (string) || (item.description && item.description.toLowerCase ().includes (string))
    }

    const filteredProducts = products.filter (x => itemFilter (x))

    return (

        <div className={ cls ('search', className, { 'error': error && input === value }) }>
            <input
                type='text'
                name='repo'
                spellCheck={ false }
                value={ input }
                onChange={ ({ target: { value }}) => {
                    setInput (value)
                    if (!buttonText) { onChange (value) }
                }}
            />

                {console.log (filteredProducts)}
                {input && <ul className='search-list'>
                    {filteredProducts.map (prdct => <li className='filtered-item' key={prdct.id}>
                                                        <div style={{ backgroundImage: `url(${images[prdct.img]})`}}
                                                             className='filtered-item-background'/>
                                                        <div className='filtered-item-info-wrapper'>
                                                            <div className='filtered-item-description'><p>
                                                                <strong>{prdct.title}</strong>{prdct.description && (', ' + prdct.description)}</p>
                                                            </div>
                                                            <div className='filtered-item-price'>{prdct.price}</div>
                                                        </div>
                                                    </li>
                    )}
                </ul>}
            { error && input === value && <span className='search-error'>{ error }</span> }
        </div>
    )
}