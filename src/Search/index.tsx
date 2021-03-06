import React, { useState } from 'react'
import cls from 'classnames'
import debounce from 'lodash.debounce'
import './index.css'
import { products, Product } from '~/data'
import images from '~/images'
import { Link } from 'react-router-dom'
import { useAppContext } from '~/App/Context'

export default function Search ({
    
    onChange = (_value: string) => {},
    value = '',
    className = '',
    buttonText = undefined as string,
    error = ''}) {

    const [ input, setInput ] = useState<string> (value)
    const [ hideSearchItems, setHidesearchItems ] = useState<boolean|undefined> ()
    const { currentLanguage } = useAppContext ()

    if (!buttonText) {
        onChange = debounce (onChange, 1000)
    }

    function itemFilter (item: Product) {
        
        const string = input.toLowerCase ()
        // return item.title[Number (currentLanguage)].toLowerCase ().includes (string) || (item.description && item.description.toLowerCase ().includes (string))
        return (item.title[0].toLowerCase () && item.title[1].toLowerCase ()).includes (string) || (item.description && item.description.toLowerCase ().includes (string))
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
                                                            key={ prdct.id } to={`/item/${ prdct.id  }`}
                                                            onClick={() => { setHidesearchItems (false); setInput ('')}}>
                                                        <div style={{ backgroundImage: `url(${ images[prdct.img[0]] })`}}
                                                             className='filtered-item-background'/>
                                                        <div className='filtered-item-info-wrapper'>
                                                            <div className='filtered-item-description'>
                                                                <p className='filtered-item-title'><strong>{ prdct.title[Number (currentLanguage)] }</strong></p>
                                                                <p>{ prdct.description && prdct.description }</p>
                                                            </div>
                                                            <div className='filtered-item-price'>{ prdct.price }</div>
                                                        </div>
                                                        {/* <div style={{ backgroundImage: `url(${images[prdct.img]})`}}
                                                             className='filtered-item-background'/> */}
                                                    </Link>
                    )}
                </ul>}
            {/* <div className='language-change' onClick={ () => setCurrentLanguage (!currentLanguage)}></div><span>{ currentLanguage ? 'en' : 'ru' }</span> */}
            { error && input === value && <span className='search-error'>{ error }</span> }
        </div>
    )
}