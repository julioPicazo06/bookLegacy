import React from 'react'
import { MenuGeneral } from './components/MenuGeneral/MenuGeneral'
import { Portada } from './components/portada/Portada'


export const App = () => {
    return (
        <div className="principal" style={{
            backgroundColor:'#329D9C',
        }}>
            <section id="portada" style={{
            overflow: 'auto'
        }}>
                <Portada />
            </section>
            <section id="menu" >
                <MenuGeneral/>
            </section>
        
        
        </div>
    )
}
