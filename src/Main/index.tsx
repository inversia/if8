import React from 'react'
import './index.css'
import Novelties from '~/Novelties'
import Events from '~/Events'
import { Footer } from '~/Footer'
import { useAppContext } from '~/App/Context'

export function Main () {

	const { currentLanguage } = useAppContext ()

	return <>
		<div className='main-wrapper'>
			<h1>{ currentLanguage ? 'NOVELTIES' : 'НОВИНКИ' }</h1>
			<Novelties />
			<h1>{ currentLanguage ? 'EVENTS' : 'СОБЫТИЯ'}</h1>
			<Events />
		</div>
		<Footer />
	</>
}
