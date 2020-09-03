import React from 'react'
import './index.css'
import Carousel from '~/Carousel'



export default function Testimonials () {

const testimonials = Array.from ({ length: 5 }, (_, i) => ({
    content: ['Кольцо', 'Браслет', 'Подвеска', 'Кулон', 'Серьги'],
    name: ['Elioth Smith', 'Пал Палыч', 'Васёк', 'Петян', 'Владим Владимыч'][i],
    index: i
}))

  return (
    <div className="carousel-wrapper">
      <div className="feedbacks-wrapper">
        <Carousel>
          {testimonials.map ((props, i:number) => (
            <Testimonial key={i} {...props} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

function Testimonial () {
  return (
    <div className="feedback">
      <h1>Hiiiiii</h1>
    </div>
  )
}
