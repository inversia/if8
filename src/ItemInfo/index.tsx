import React from 'react'
import './index.css'
import { productsById, FilterProps } from '~/data'
import images from '~/images'
import { useCartContext } from '~/Cart/Context'
import Carousel from '~/Carousel'
import PriceInRub from '~/PriceInRub'
import { useAppContext } from '~/App/Context'

export function ItemInfo ({ id }: FilterProps) {


	const chosenProduct = productsById[id]
	const { cartItems, addToCart } = useCartContext ()
	const count = cartItems[id] || 0
	const notOnlyItem = chosenProduct.img.length > 1
	const { currentLanguage } = useAppContext ()

	return <div className='item-wrapper'>
				<div className='item-container'>
						<Carousel pagination={false} itemAmount={ notOnlyItem }>
							{ (chosenProduct.img).map (x => <div className='illustrations' key={ chosenProduct.id }><div className='illustration' style={{ backgroundImage: `url(${ images[x] })` }}/></div>)}
						</Carousel>
					<div className='item-info'>
						<ul>
							<li>
								<label>{ currentLanguage ? 'Description' : 'Описание' }</label>
								<span><strong>{ chosenProduct.title[Number (currentLanguage)]}</strong>{ chosenProduct.description && (', ' + chosenProduct.description) }</span>
							</li>
							<li>
								<label>{ currentLanguage ? 'Product number' : 'Артикул' }</label>
								<span>{ chosenProduct.partNumber }</span>
							</li>
							{ chosenProduct.probe && <li>
								<label>{ currentLanguage ? 'Probe' : 'Проба' }</label>
								<span>{ chosenProduct.probe }</span>
							</li>}
							<li>
								<label>{ currentLanguage ? 'Availability' : 'Наличие' }</label>
								<span>{ chosenProduct.availability }</span>
							</li>
							<li>
								<label>{ currentLanguage ? 'Price' : 'Цена' }</label>
								<span><PriceInRub price={ chosenProduct.price }/></span>
							</li>
							<li>
								<label>{ currentLanguage ? 'Colors' : 'Цвета' }</label>
								<div className='products-colors'>
									{ chosenProduct.colors.map ((x, i) => <div key={i}
																   style={{ backgroundColor:`#${x[1]}` }}/>) }
								</div>
							</li>
						</ul>
						<button onClick={() => addToCart (id)}>{ currentLanguage ? 'BUY' : 'КУПИТЬ'}{ count ? ` (${ count })` : '' }</button>
					</div>
				</div>
	</div>
}
