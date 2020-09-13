import React from 'react'
import './index.css'
import Carousel from '~/Carousel'

type EventProps = {
  content: string [],
  name: string [],
  index: number
}

export default function Events () {

const events = Array.from ({ length: 5 }, (_, i:number) => ({
    content: ['fdsgsdfg', 'jfgjsfgjf', 'trwjsd', 'aafdhf', 'kfkjhh'],
    index: i
}))

  return (
    <div className='carousel-wrapper-events'>
      <div className='event-wrapper'>
        <Carousel>
          {events.map ((props, i:number) => (
            <Event key={i} {...props} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

function Event () {
  return (
    <div className='event'>
      <div className='event-image'></div>
      <div className='event-description'>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
      </div>
    </div>
  )
}
