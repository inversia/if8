import React, { createContext, useContext, useState } from 'react'
import { useWindowSize } from 'use-hooks'

type AppContext = {
    isMobile: boolean,
    windowWidth: number,
    priceValue: number,
    setPriceValue: (n:number) => void,
    numberWithSpaces: (n:number) => string
}

const appContext = createContext<AppContext> (null as AppContext)

export const useAppContext = () => useContext (appContext)

export function numberWithSpaces (x:number) {
    return x.toString ().replace (/\B(?=(\d{3})+(?!\d))/g, ' ') + ' P'
}

export function AppContextProvider ({ children = null as React.ReactChild }) {
    
    const windowSize = useWindowSize ()
    const isMobile = windowSize.width < 665
    const [ priceValue, setPriceValue ] = useState ()

    return (
        <appContext.Provider value={{ isMobile, windowWidth: windowSize.width, priceValue, setPriceValue, numberWithSpaces }}>
            { children }
        </appContext.Provider>
    )
}
