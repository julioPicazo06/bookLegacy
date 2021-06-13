import React from 'react'
import { MenuGeneral } from './components/MenuGeneral/MenuGeneral'
import { Portada } from './components/portada/Portada'


export const App = () => {
    return (
        <div style={{
            overflowY: 'hidden'
        }}>
            <section id="portada">
                <Portada />
            </section>
            <section id="menu">
                {/* <Menu/> */}
                <MenuGeneral/>
            </section>
        
        
        </div>
    )
}
