import React from 'react'
import './index.css'
import { Footer } from '~/Footer'
import { YMaps, Map } from 'react-yandex-maps'

export default function Contacts () {
    return <div className='contacts-wrapper'>
        <div className='contacts-footer-wrapper'>
            <Footer />
            <div className='decoration-corner'></div>
            <div className='map'>
                <YMaps>
                    <script  type='text/javascript' charSet='utf-8' async src='https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aaac9885f941d30a51c13a1dab4e919170146be5b3d8949f52088c73939b8a542&amp;width=52vw&amp;height=52vw&amp;lang=ru_RU&amp;scroll=true'></script>
                    <Map className='map' defaultState={{ center: [55.750879, 37.667644], zoom: 13 }} />
                </YMaps>
            </div>
        </div>
    </div>
}