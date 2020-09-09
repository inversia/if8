import React from 'react'
import './index.css'
import Carousel from '~/Carousel'

type NoveltiesProps = {

  content: string [],
  name: string [],
  index: number
}

export default function Novelties () {

const testimonials = Array.from ({ length: 15 }, (_, i:number) => ({
    content: ['Кольцо', 'Браслет', 'Подвеска', 'Кулон', 'Серьги'],
    name: ['Elioth Smith', 'Пал Палыч', 'Васёк', 'Петян', 'Владим Владимыч'][i],
    index: i
} as NoveltiesProps))

  return (
    <div className='carousel-wrapper-novelties'>
      <div className='novelty-wrapper'>
        <Carousel>
          {testimonials.map ((props, i:number) => (
            <Novelty key={i} {...props} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

function Novelty () {
  return (
    <div className='novelty'>
      <div className='novelty-image'></div>
    </div>
  )
}
