import React  from 'react'
import './index.css'
// import cls from 'classnames'
import { usePath } from 'hookrouter'


export default function NavigationBar () {

    const [,, category, subcategory, material ] = usePath ().split ('/')

    const navigationDict: Record<string, string> = {

        jewellery: 'ювелирные украшения',
        interior: 'интерьер',
        rings: 'кольца',
        bracelets: 'браслеты',
        earrings: 'серьги',
        neck: 'цепочки и подвески',
        brooches: 'броши',
        corporate: 'корпоративные',
        exclusive: 'эксклюзив',
        vases: 'вазы',
        tables:'столы',
        chairs:'стулья',
        statuettes: 'статуэтки',
        gold: 'золото',
        silver: 'серебро',
        platinum: 'платина',
        wood: 'дерево',
        metal:'металл',
        ceramic:'керамика',
        glass:'стекло',
        steel:'сталь',
        all: 'все',
        undefined: ''
    }

    const purePath = [navigationDict[category] , navigationDict[subcategory], navigationDict[material]].filter ( x => x !== undefined && ' ')
    const joinedPath = purePath.join (' / ')
    const finalPath = joinedPath.slice (0, joinedPath.length - 1 )

    return <>
        <div className='navigation-bar'>{ joinedPath }</div>
    </>
}