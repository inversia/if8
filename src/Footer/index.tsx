import React from 'react'
import './index.css'

export function Footer () {
	return (
		<>
			<div className='footer-wrapper'>
				<div className='contacts'>
					<div className='phone'>
						<a href='tel:+7 495 799 19 28'>+7 967 097 79 29</a>
						<a href='tel:+7 495 799 19 28'>+7 495 005 59 36</a>
					</div>
					<div className='self-delivery'>Самовывоз из галереи IlgizF по адресу:</div>
					<div className='address'>
						<a href='https://yandex.ru/maps/213/moscow/house/leningradskiy_prospekt_10/Z04YcwBpQEYEQFtvfXt2eHtjYw==/?ll=37.579986%2C55.779717&z=19.6'>
						Ленинградский проспект 10-12
						</a>
					</div>
					<span className='company-info'>OOO thebestcompany 4537896739223</span>
				</div>
				<div className='social'>
					<div className='telegram' />
					<div className='facebook' />
					<a href='https://www.instagram.com/art_if8/'><div className='instagram'></div></a>
				</div>
			</div>
		</>
	)
}
