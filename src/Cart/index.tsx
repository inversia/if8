import React, { useRef, useState} from 'react'
import './index.css'
import { useCartContext } from '~/Cart/Context'
import { productsById, products, FilterProps } from '~/data'
import images from '~/images'

function RequiredInput (props) {

    const [edited, setEdited] = useState (false)

    return <input {...props} {...edited && { 'data-edited': true }} onBlur={() => setEdited (true)} onInput={() => setEdited (true)} required></input>
}

export default function Cart () {


    const form = useRef ()

    const [isLoading, setIsLoading] = useState (false)
    const [isDone, setIsDone] = useState (false)

//     async function onSubmit (event) {

//         const formInputs = Object.fromEntries (new FormData (form.current))

//         try {

//             event.preventDefault ()

//             setIsLoading (true)

//             await timeout (2000)

//             setIsLoading (false)
//             setIsDone (true)


//             function getEmailText (form) {

//                 const pizzaSize = {
//                     true: 'большая',
//                     false: 'маленькая',
//                     undefined: ''
//                 }

//                 const orderInfo = cartItems.map (x => ` ${productLabels[x.productType]} «‎${x.name}» ${pizzaSize[x.isLarge]}`)

//                 return `Новый заказ от ${form.name || 'дорогого клиента'}
// По адресу: ${form.address}
// Номер для связи: ${form.phone}
// ${form.notes ? `Пометки: ${form.notes}` : ''}
// Что приготовить: ${orderInfo}`
//             }


//             const response = await fetch ('https://hn5giybyzb.execute-api.eu-central-1.amazonaws.com/default/submitPizzaOrder', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify (getEmailText (formInputs))
//             })

//             if (response.status != 200) {
//                 throw new Error (await response.text ())
//             }

//         } catch (error){
//             alert ('You have an error: ' + error.message)
//         }
//     }

    const { cartItems, removeFromCart } = useCartContext ()

    const totalChosenProductes = Object.keys (cartItems).map (x => productsById[x])
    const totalPrice = totalChosenProductes.map (x => (x.price * cartItems[x.id])).reduce ((a, b) => a + b, 0)

    return <>
        <div className='cart-wrapper'>
            <div className='chosen-products'>
                {totalChosenProductes.map (prdct => <div className='chosen-item' key={prdct.id}>
                                                        <div style={{ backgroundImage: `url(${images[prdct.img]})`}}
                                                             className='item-background'/>
                                                        <div className='item-info-wrapper'>
                                                            <div className='description'><p>{prdct.description}</p></div>
                                                            <div className='price'>{prdct.price}</div>
                                                            <button className='delete' onClick={() => removeFromCart (prdct.id)}></button>
                                                        </div>
                                                        <div className='num-item'>{cartItems[prdct.id]}</div>
                                                    </div>
                )}
            </div>
            <div className='total-price'><span>ИТОГО</span>{totalPrice}</div>
            <h1>ФОРМА</h1>
            <div className='form-wrapper'>
                <form ref={form} className='fields'>
                    <input         disabled={isLoading} type='text' name='name'    placeholder='Как к Вам обращаться?'/>
                    <RequiredInput disabled={isLoading} type='text' name='address' placeholder='Адрес'/>
                    <RequiredInput disabled={isLoading} type='tel'  name='phone'   pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' placeholder='Номер для связи'/>
                    <input         disabled={isLoading} type='text' name='notes'   placeholder='Пометки'/>
                </form>
                <button className='submit'>ОТПРАВИТЬ</button>
            </div>
        </div>
    </>
}