import React from 'react'
import './index.css'
import { useAppContext } from '~/App/Context'

export function Footer () {

	const { currentLanguage } = useAppContext ()

	return (
		<>
			<div className='footer-wrapper'>
				<div className='contacts'>
					<div className='phone'>
						<a href='tel:+7 495 799 19 28'>+7 967 097 79 29</a>
						<a href='tel:+7 495 799 19 28'>+7 495 005 59 36</a>
					</div>
					<div className='self-delivery'>{ currentLanguage ? 'Self-delivery from IlgizF Gallery at the address:' : 'Самовывоз из галереи IlgizF по адресу:' }</div>
					<div className='address'>
						<a href='https://yandex.ru/maps/213/moscow/house/leningradskiy_prospekt_10/Z04YcwBpQEYEQFtvfXt2eHtjYw==/?ll=37.579986%2C55.779717&z=19.6'>
						{ currentLanguage ? 'Leningradsky Avenue, 10' : 'Ленинградский проспект 10-12' }
						</a>
					</div>
					<span className='company-info'>{ currentLanguage? 'ITN' : 'ИНН'} 164800399262</span>
				</div>
				<div className='social'>
					<div className='telegram'><a href="mailto:tatiana@if8.ru" /></div>
					<div className='facebook' onClick={ () => alert ('Совсем скоро у нас появится страничка в Facebook!')}/>
					<a href='https://www.instagram.com/art_if8/'><div className='instagram'></div></a>
				</div>
			</div>
		</>
	)
}
