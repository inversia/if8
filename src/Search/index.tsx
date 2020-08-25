import React, { useState } from 'react'
// import { Button } from 'Common'
import cls from 'classnames'
import debounce from 'lodash.debounce'
import './index.css'

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
            { error && input === value && <span className='search-error'>{ error }</span> }
        </div>
    )
}