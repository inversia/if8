import React, { createContext, useContext, useState } from 'react'
import { useWindowSize } from 'use-hooks'

type AppContext = {
    isMobile: boolean,
    windowWidth: number,
    priceValue: number,
    setPriceValue: (n:number) => void,
    numberWithSpaces: (n:number) => string,
    language: string,
    currentLanguage:string,
    setCurrentLanguage: (s:string) => void
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
    const CIS = 'ru' || 'be' || 'uk' || 'hy' || 'ky' || 'uz' || 'tg' || 'kk' || 'ab' || 'az' || 'ba'
    const language = navigator.language.split ('-')[0] === CIS ? 'ru' : 'en'
    const [ currentLanguage, setCurrentLanguage ] = useState (language)

    return (
        <appContext.Provider value={{ isMobile, windowWidth: windowSize.width, priceValue, setPriceValue, numberWithSpaces, language,
            currentLanguage, setCurrentLanguage }}>
            { children }
        </appContext.Provider>
    )
}
