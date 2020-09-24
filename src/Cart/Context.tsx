import React, { useContext, createContext, useState } from 'react'
import {ProductId, productsById} from '~/data'
import produce from 'immer'

type CartItems = Record<ProductId, number> // number is a count of purchased products

type CartContext = {
    cartItems: CartItems
    addToCart(id: ProductId): void
    removeFromCart(id: ProductId): void
    clearCart(): void
    totalItems (): number
}

export const cartContext = createContext<CartContext> (null as CartContext)

export const useCartContext = () => useContext (cartContext)

const savedProducts = (JSON.parse (localStorage.getItem ('cartItems')) || {}) as CartItems

for (const id in savedProducts) {
    if (!(id in productsById)) {
        console.warn ('Unknown product:', id)
        delete savedProducts[id]
    }
}

export function CartContextProvider ({ children = null as React.ReactChild }) {
    const [items, setItems] = useState (savedProducts)

    function setCartItems (newItems: CartItems) {
        setItems (newItems)
        localStorage.setItem ('cartItems', JSON.stringify (items))
    }

    // Увеличивает кол-во продукта в `items`
    const addToCart = (id: ProductId) => {
        setCartItems (produce (items, (newItems) => {
            newItems[id] = (newItems[id] || 0) + 1
        }))
    }

    // Уменьшает кол-во продукта в `items`, при достижении нуля удаляет его из `items`
    const removeFromCart = (id: ProductId) => {
        setCartItems (produce (items, (newItems) => {
            newItems[id] = (newItems[id] || 0) - 1
            if (newItems[id] <= 0) delete newItems[id]
        }))
    }

    const clearCart = () => {
        setCartItems ({})
    }

    const totalItems = () => Object.keys (items).length

    return (
        <cartContext.Provider value={{ cartItems: items, addToCart, removeFromCart, clearCart, totalItems }}>
            {children}
        </cartContext.Provider>
    )
}
