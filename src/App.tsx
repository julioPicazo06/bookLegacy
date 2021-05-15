import React from 'react'
import { Menu } from './components/menu/Menu'
import { Portada } from './components/portada/Portada'

export const App = () => {
    return (
        <>
            <section id="portada">
                <Portada />
            </section>
            <section id="menu">
                <Menu/>
            </section>
        
        
        </>
    )
}
