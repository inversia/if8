import React, { createContext, useContext } from 'react'
import { useWindowSize } from 'use-hooks'

type AppContext = {
    isMobile: boolean
    windowWidth: number
}

const appContext = createContext<AppContext> (null as AppContext)

export const useAppContext = () => useContext (appContext)

export function AppContextProvider ({ children = null as React.ReactChild }) {
    
    const windowSize = useWindowSize ()
    const isMobile = windowSize.width < 665

    return (
        <appContext.Provider value={{ isMobile, windowWidth: windowSize.width }}>
            { children }
        </appContext.Provider>
    )
}
