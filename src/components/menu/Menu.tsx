import React, { FC, MutableRefObject, useRef } from 'react'
import CSS from 'csstype'
import yo from '../../img/yo.png'
import contacto from '../../img/contacto.png'
import illustracion from '../../img/illustracion.png'
import frontEnd from '../../img/frontEnd.png'

const menu:CSS.Properties = {
    backgroundColor: '#FF414D',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
}



export const Menu:FC<any> = () => {
   

    const yoDiv:MutableRefObject<any> = useRef()
    const menuDiv:MutableRefObject<any> = useRef()
    const contactoDiv = useRef()
    const illustracionDiv = useRef()
    const frontEndDiv = useRef()

    const handleClick = ( { target:{parentNode:{parentNode:elemento}} }:any ):void=>{
        // elemento.classList.add('fullSize')
        //console.log( elemento )
       // console.log( yoDiv.current.classList.remove( 'menu-item' ) )
        console.log(menuDiv.current.offsetWidth)
        
    }


    return (
        <div className="menu" style={menu} ref={ menuDiv }>
            
                <div className="menu-item" ref={ yoDiv }>
                    <div>
                       <img className="menu-img" src={ yo }  alt="yo"/>
                        <h1>Yo</h1>  
                    </div>
                   
                </div>
                
           
            
                <div className="menu-item">
                   <div onClick={ ( e ) => handleClick( e ) }>
                   <img className="menu-img" src={ frontEnd }  alt="frontEnd"/>
                    <h1>FrontEnd</h1> 
                   </div>
                </div>
            
            
           
                <div className="menu-item">
                    <div>
                        <img className="menu-img" src={ illustracion }  alt="illustracion"/>
                        <h1>Ilustracion</h1>
                    </div>
                </div>
            
     
            
            <div className="menu-item">
                <div>
                <img className="menu-img" src={ contacto }  alt="contacto"/>

                    <h1>
                        Contacto
                    </h1>
                </div>
            </div>
            
        </div>
    )
}
