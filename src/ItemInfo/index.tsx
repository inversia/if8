import React from 'react'
import './index.css'
import { products, FilterProps } from '~/data'
// import images from '~/images'

export function ItemInfo ({ id }: FilterProps) {

	const choosenProduct = products.find (x => x.id === id)

	return <>
		<div className='item-wrapper'>
			<div className='illustration'></div>
			<div className='item-info'>
				<ul>
					<label>Описание</label>
					<li>{choosenProduct.description}</li>
					<label>Артикул</label>
					<li>{choosenProduct.partNumber}</li>
					<label>Проба</label>
					<li>{choosenProduct.probe}</li>
					<label>Наличие</label>
					<li></li>
					<label>Цена</label>
					<li>{choosenProduct.price}</li>
					<label>Цвета</label>
				</ul>
			</div>
		</div>
	</>
}
