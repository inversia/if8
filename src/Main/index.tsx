import React from 'react'
import './index.css'
import Novelties from '~/Novelties'
import Events from '~/Events'
import { Footer } from '~/Footer'

export function Main () {
	return <>
		<div className='main-wrapper'>
			<h1>НОВИНКИ</h1>
			<Novelties />
			<h1>СОБЫТИЯ</h1>
			<Events />
		</div>
		<Footer />
	</>
}
