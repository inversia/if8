import React from 'react'
import './index.css'
import Carousel from '~/Carousel'
import novelties from '~/data/novelties'
import images from '~/images'

type NoveltiesProps = {

  content: string [],
  name: string [],
  index: number
}

export default function Novelties () {

  return (
    <div className='carousel-wrapper-novelties'>
      <div className='novelty-wrapper'>
        <Carousel>
          { novelties.map ((props, i:number) => (
            <Novelty key={i} {...props} />
          )) }
        </Carousel>
      </div>
    </div>
  )
}

function Novelty (props: {text: string, image: string}) {
  return (
    <div className='novelty'>
      <div className='novelty-image' style={{ backgroundImage: `url(${images[props.image]})` }}></div>
    </div>
  )
}