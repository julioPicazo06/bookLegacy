import React from 'react'
import { MenuGeneral } from './components/MenuGeneral/MenuGeneral'
import { Portada } from './components/portada/Portada'


export const App = () => {
    return (
        <div className="principal">
            <section id="portada">
                <Portada />
            </section>
            <section id="menu" >
                <MenuGeneral/>
            </section>
        
        
        </div>
    )
}
