import React from 'react'
import './index.css'
import Carousel from '~/Carousel'
import events from '~/data/events'
import images from '~/images'

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

function Event (props: {text: string, image: string}) {

	return (
		<div className='event'>
			<div className='event-image' style={{ backgroundImage: `url(${images[props.image]})` }}></div>
			<div className='event-description'>
				<p>{ props.text }</p>
			</div>
		</div>
	)
}
