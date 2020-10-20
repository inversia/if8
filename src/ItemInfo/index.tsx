import React from 'react'
import './index.css'
import { productsById, FilterProps } from '~/data'
import images from '~/images'
import { useCartContext } from '~/Cart/Context'
import Carousel from '~/Carousel'

export function ItemInfo ({ id }: FilterProps) {


	const chosenProduct = productsById[id]
	const { cartItems, addToCart } = useCartContext ()
	const count = cartItems[id] || 0
	const notOnlyItem = chosenProduct.img.length > 1

	return <div className='item-wrapper'>
				<div className='item-container'>
						<Carousel pagination={false} itemAmount={notOnlyItem}>
							{ (chosenProduct.img).map (x => <div className='illustrations' key={ chosenProduct.id }><div className='illustration' style={{ backgroundImage: `url(${images[x]})` }}/></div>)}
						</Carousel>
					<div className='item-info'>
						<ul>
							<li>
								<label>Описание</label>
								<span><strong>{chosenProduct.title}</strong>{chosenProduct.description && (', ' + chosenProduct.description)}</span>
							</li>
							<li>
								<label>Артикул</label>
								<span>{chosenProduct.partNumber}</span>
							</li>
							{chosenProduct.probe && <li>
								<label>Проба</label>
								<span>{chosenProduct.probe}</span>
							</li>}
							<li>
								<label>Наличие</label>
								<span>{chosenProduct.availability}</span>
							</li>
							<li>
								<label>Цена</label>
								<span>{chosenProduct.price}</span>
							</li>
							<li>
								<label>Цвета</label>
								<div className='products-colors'>
									{ chosenProduct.colors.map ((x, i) => <div key={i}
																			   style={{backgroundColor:`#${x[1]}`}}/>) }
								</div>
							</li>
						</ul>
						<button onClick={() => addToCart (id)}>КУПИТЬ{count ? ` (${count})` : ''}</button>
					</div>
				</div>
	</div>
}
