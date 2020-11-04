import React from 'react'
import './index.css'
import Carousel from '~/Carousel'
import events from '~/data/events'
import images from '~/images'
import { useAppContext } from '~/App/Context'

export default function Events () {
	return (
		<div id='events' className='carousel-wrapper-events'>
			<div className='event-wrapper'>
			<Carousel>
				{ events.map ((props, i:number) => (
					<Event key={i} {...props} />
				))}
			</Carousel>
			</div>
		</div>
	)
}

function Event (props: { text: string[], image: string }) {

	const { currentLanguage } = useAppContext ()

	return (
		<div className='event'>
			<div className='event-image' style={{ backgroundImage: `url(${images[props.image]})` }}></div>
			<div className='event-description'>
				<p>{ props.text[+currentLanguage] }</p>
			</div>
		</div>
	)
}
