import React from 'react'
import { Menu } from './components/menu/Menu'
import { Portada } from './components/portada/Portada'
import { Link, animateScroll as scroll } from "react-scroll";


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
