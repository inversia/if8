import React from 'react'
import './index.css'
import { products, FilterProps } from '~/data'
import images from '~/images'

export function ItemInfo ({ id }: FilterProps) {

	const choosenProduct = products.find (x => x.id === id)

	return <>
		<div className='item-wrapper'>
			<div className='illustration' style={{ backgroundImage: `url(${images[choosenProduct.img]})` }}></div>
			<div className='item-info'>
				<ul>
					<li>
						<label>Описание</label>
						<span>{choosenProduct.description}</span>
					</li>
					<li>
						<label>Артикул</label>
						<span>{choosenProduct.partNumber}</span>
					</li>
					<li>
						<label>Проба</label>
						<span>{choosenProduct.probe}</span>
					</li>
					<li>
						<label>Наличие</label>
						<span>{choosenProduct.availability}</span>
					</li>
					<li>
						<label>Цена</label>
						<span>{choosenProduct.price}</span>
					</li>
					<li>
						<label>Цвета</label>
						<div className='products-colors'>
							{ choosenProduct.colors.map ((x, i) => <div key={i}
																		style={{backgroundColor:`#${x[1]}`}}/>) }
						</div>
					</li>
				</ul>
				<button>КУПИТЬ</button>
			</div>
		</div>
	</>
}
