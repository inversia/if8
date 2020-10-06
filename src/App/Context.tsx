import React, { createContext, useContext, useState } from 'react'
import { useWindowSize } from 'use-hooks'

type AppContext = {
    isMobile: boolean,
    windowWidth: number,
    priceValue: number,
    setPriceValue: (n:number) => void
}

const appContext = createContext<AppContext> (null as AppContext)

export const useAppContext = () => useContext (appContext)

export function AppContextProvider ({ children = null as React.ReactChild }) {
    
    const windowSize = useWindowSize ()
    const isMobile = windowSize.width < 665
    const [ priceValue, setPriceValue ] = useState (500)

    return (
        <appContext.Provider value={{ isMobile, windowWidth: windowSize.width, priceValue, setPriceValue }}>
            { children }
        </appContext.Provider>
    )
}
