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
}))

  return (
    <div className='carousel-wrapper'>
      <div className='feedbacks-wrapper'>
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
    <div className='feedback'>
      <h1>Lot number</h1>
      <div className='novelty-image'></div>
    </div>
  )
}
