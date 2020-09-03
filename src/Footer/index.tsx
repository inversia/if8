import React from 'react'
import './index.css'

export default function Footer () {
  return (
    <>
      <div className='footer-wrapper'>
        <div className='contacts'>
          <div className='phone'>
            <a href='tel:+7 495 005 59 36'>+7 495 005 59 36</a>
          </div>
          <div className='address'>
            <a href='https://yandex.ru/maps/213/moscow/?ll=37.667875%2C55.751033&mode=search&sll=37.622504%2C55.753215&sspn=1.312866%2C0.518904&text=%D0%9A%D0%BE%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%20%D0%B4.3%20%D1%81.6%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=17.35'>
              Костомаровский переулок д.3 с.6, Москва
            </a>
          </div>
          <span>OOO thebestcompany 4537896739223</span>
        </div>
        <div className='social'>
          <div className='telegram' />
          <div className='facebook' />
          <div className='instagram' />
        </div>
      </div>
    </>
  );
}
