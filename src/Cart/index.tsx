import React, { ChangeEvent, FormEvent, useRef, useState} from 'react'
import './index.css'
import { useCartContext } from '~/Cart/Context'
import { productsById } from '~/data'
import images from '~/images'
import cls from 'classnames'
import PriceInRub from '~/PriceInRub'
import { useAppContext } from '~/App/Context'

export default function Cart () {

    const { cartItems, removeFromCart, clearCart } = useCartContext ()
    const products = Object.keys (cartItems).map (x => productsById[x])

    const form = useRef ()

    const [isLoading, setIsLoading] = useState (false)
    const [isDone, setIsDone] = useState (false)

    const { currentLanguage } = useAppContext ()
    
    async function onSubmit (event: FormEvent) {

        // @ts-ignore
        const formInputs = Object.fromEntries<FormInputs> (new FormData (form.current))

        try {
            event.preventDefault ()

            setIsLoading (true)
            await timeout (2000)
            await sendOrder ({
                ...formInputs,
                items: products.map (p => ({
                    partNumber: p.partNumber,
                    count: cartItems[p.id],
                    price: p.price,
                    title: p.title
                }))
            })
            setIsDone (true)
            clearCart ()
        } catch (error){
            alert (String (error))
        } finally {
            setIsLoading (false)
        }
    }

    const totalPrice = products.map (x => (x.price * cartItems[x.id])).reduce ((a, b) => a + b, 0)

    return <>
        <div className={cls ('cart-content', { 'form-loading': isLoading, 'done': isDone }) }>
            <p className='exclusive-order'>
                { currentLanguage ? 'WE CAN MAKE JEWELLERY / AN INTERIOR ITEM WITH YOUR WISHES AND INDIVIDUAL DESIGN' : 'мы можем изготовить украшение / предмет интерьера с учётом ваших пожеланий и с индивидуальным дизайном' }
            
            </p>
            <div className='chosen-products'>
                { products.map (prdct => <div className='chosen-item' key={ prdct.id }>
                                            <div style={{ backgroundImage: `url(${ images[prdct.img[0]]})` }}
                                                    className='item-background'/>
                                            <div className='item-info-wrapper'>
                                                <div className='description'>
                                                    <p><strong>{ prdct.title[+currentLanguage] }</strong>{ prdct.description && (', ' + prdct.description) }</p>
                                                </div>
                                                <div className='price'><PriceInRub price={ prdct.price }/></div>
                                                <button className='delete' onClick={() => removeFromCart (prdct.id)}></button>
                                            </div>
                                            <div className='num-item'>{ cartItems[prdct.id] }</div>
                                        </div>
                ) }
            </div>
            { totalPrice > 0 && <div className='total-price'><span className='in-total'>{ currentLanguage ? 'TOTAL:' : 'ИТОГО:' }</span><PriceInRub price={ totalPrice }/></div> }
            <h1>{ currentLanguage ? 'ORDER' : 'ФОРМА' }</h1>
            <div className='form-wrapper'>
                <form ref={ form } className='fields'>
                    <Input         disabled={ isLoading } type='text' name='name'    placeholder={ currentLanguage ? 'What\'s your name?' : 'Как к Вам обращаться?'}/>
                    <RequiredInput disabled={ isLoading } type='tel'  name='phone'   placeholder={ currentLanguage ? 'Contact phone number' : 'Контактный номер'}/>
                    <Input         disabled={ isLoading } type='text' name='email'   placeholder='E-mail'/>
                    <Input         disabled={ isLoading } type='text' name='notes'   placeholder={ currentLanguage ? 'More details, clarifications' : 'Уточнения по заказу'}/>
                </form>
                <button className={ cls ('submit', {'en': currentLanguage})} onClick={ onSubmit } />
            </div>
        </div>
    </>
}


function RequiredInput<T> (props: T) {
    const [edited, setEdited] = useState (false)

    return <Input
        {...props}
        {...edited && { 'data-edited': true }}
        onBlur={() => setEdited (true)}
        onInput={() => setEdited (true)} required />
}

function Input<T> (props: T) {
    const [value, setValue] = useState ('')

    function onChange (e: ChangeEvent) { setValue ((e.currentTarget as HTMLInputElement).value) }

    return <input
        {...props}
        {...!value && { 'data-empty': true }}
        autoComplete='off'
        value={value}
        onChange={onChange} />
}

function timeout (ms: number) {
    return new Promise ((done) => setTimeout (done, ms))
}

type OrderItem = {
    partNumber: string
    count: number
    price: number
    title: string
}

type FormInputs = {
    address: string
    phone: string
    email: string
    notes: string
}

type OrderData = FormInputs & {
    items: OrderItem[]
}

async function sendOrder (data: OrderData) {
    console.log ('OrderData:', data)

    

    // const response = await fetch ('https://vdror2s40j.execute-api.eu-central-1.amazonaws.com/default/acceptZILOrder', {
    const response = await fetch ('https://t8v82xm73h.execute-api.eu-central-1.amazonaws.com/default/accept', {
        method: 'POST',
        body: JSON.stringify (data)
    })
    const text = await response.text ()
    if (!response.ok) throw new Error (`Ошибка: ${text.slice (0, 100)} (код ${response.status})`)
}
