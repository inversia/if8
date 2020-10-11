import React, { useState } from 'react'
// import { Button } from 'Common'
import cls from 'classnames'
import debounce from 'lodash.debounce'
import './index.css'
import { products, Product, FilterProps, FilterProp } from '~/data'

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

    function itemFilter (item:string) {

        const string = input.toLowerCase ()
        return !string || ( products.description.toLowerCase ().includes (string)) as string || ( products.title.toLowerCase ().includes (string)) as string
    }

    const filteredProducts = products.filter (itemFilter)

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
            <ul className='search-list'>
                <li>{input}</li>
                {console.log (products)}
            </ul>
            { error && input === value && <span className='search-error'>{ error }</span> }
        </div>
    )
}