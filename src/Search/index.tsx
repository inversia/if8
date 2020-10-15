import React, { useState } from 'react'
import cls from 'classnames'
import debounce from 'lodash.debounce'
import './index.css'
import { products, Product } from '~/data'
import images from '~/images'
import { Link } from 'react-router-dom'

export default function Search ({
    
    onChange = (_value: string) => {},
    value = '',
    className = '',
    buttonText = undefined as string,
    error = ''}) {

    const [input, setInput] = useState<string> (value)
    const [hideSearchItems, setHidesearchItems] = useState<boolean|undefined> ()

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
                autoComplete='off'
                autoCorrect='off'
                name='repo'
                spellCheck={ false }
                value={ input }
                onChange={ ({ target: { value }}) => {
                    setInput (value)
                    setHidesearchItems (true)
                    if (!buttonText) { onChange (value) }
                }}
            />

                {hideSearchItems !== false && (input && (filteredProducts.length > 0)) && <ul className='search-list'>
                    {filteredProducts.map (prdct => <Link   className='filtered-item'
                                                            key={prdct.id} to={`/item/${prdct.id}`}
                                                            onClick={() => { setHidesearchItems (false); setInput ('')}}>
                                                        <div style={{ backgroundImage: `url(${images[prdct.img]})`}}
                                                             className='filtered-item-background'/>
                                                        <div className='filtered-item-info-wrapper'>
                                                            <div className='filtered-item-description'>
                                                                <p className='filtered-item-title'><strong>{prdct.title}</strong></p>
                                                                <p>{prdct.description && prdct.description}</p>
                                                            </div>
                                                            <div className='filtered-item-price'>{prdct.price}</div>
                                                        </div>
                                                        {/* <div style={{ backgroundImage: `url(${images[prdct.img]})`}}
                                                             className='filtered-item-background'/> */}
                                                    </Link>
                    )}
                </ul>}
            { error && input === value && <span className='search-error'>{ error }</span> }
        </div>
    )
}