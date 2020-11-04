import React, { createContext, useContext, useState } from 'react'
import { useWindowSize } from 'use-hooks'

type AppContext = {
    isMobile: boolean,
    windowWidth: number,
    priceValue: number,
    setPriceValue: (n:number) => void,
    numberWithSpaces: (n:number) => string,
    language: boolean,
    currentLanguage:boolean,
    setCurrentLanguage: (l:boolean) => void
}

const appContext = createContext<AppContext> (null as AppContext)

export const useAppContext = () => useContext (appContext)

export function numberWithSpaces (x:number) {
    return x.toString ().replace (/\B(?=(\d{3})+(?!\d))/g, ' ') + ' P'
}

export function AppContextProvider ({ children = null as React.ReactChild }) {
    
    const windowSize = useWindowSize ()
    const isMobile   = windowSize.width < 665
    const [ priceValue, setPriceValue ] = useState ()
    const CIS        = navigator.language.split ('-')[0].includes ('ru' && 'be' && 'uk' && 'hy' && 'ky' && 'uz' && 'tg' && 'kk' && 'ab' && 'az' && 'ba')
    const language   = CIS ? false : true
    const [ currentLanguage, setCurrentLanguage ] = useState<boolean> (language)

    return (
        <appContext.Provider value={{ isMobile, windowWidth: windowSize.width, priceValue, setPriceValue, numberWithSpaces, language,
            currentLanguage, setCurrentLanguage }}>
            { children }
        </appContext.Provider>
    )
}
