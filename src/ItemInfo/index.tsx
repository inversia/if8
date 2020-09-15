import React from 'react'
import './index.css'

export default function ItemInfo () {
  return (
    <div className='item-wrapper'>
      <div className='illustration'></div>
      <div className='dummy'></div>
      <div className='item-info'>
        <ul>
          <label>Описание</label>
          <li></li>
          <label>Артикул</label>
          <li></li>
          <label>Проба</label>
          <li></li>
          <label>Наличие</label>
          <li></li>
          <label>Цена</label>
          <li></li>
          <label>Цвета</label>
        </ul>
      </div>
    </div>
  )
}