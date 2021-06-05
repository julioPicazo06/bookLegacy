import React, { FC, HtmlHTMLAttributes, MouseEvent, MutableRefObject, useRef, useState } from 'react'
import CSS from 'csstype'
import yo from '../../img/yo.png'
import contacto from '../../img/contacto.png'
import illustracion from '../../img/illustracion.png'
import frontEnd from '../../img/frontEnd.png'
import { ContenidoYo } from '../ContenidoYo/ContenidoYo'
import { TimeLine } from '../TimeLine/TimeLine'



export const Menu:FC<any> = () => {
   
    const [divWidth, setDivWidth] = useState<string>('50vw') 
    const [divHeigth, setDivHeigth] = useState<string>('50vh')
    const menu:CSS.Properties = {
        backgroundColor: '#FF414D',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    const [divContent, setDivContent] = useState(true)
    
    const colorStyles = (  color : string):CSS.Properties => (
             {
                backgroundColor: color,
                width: divWidth,
                height: divHeigth,
                transition:'all 1s'
             }      
    )

    const frontEndRef:MutableRefObject<any> = useRef ()
    const illustracionRef:MutableRefObject<any> = useRef()
    const contactoRef:MutableRefObject<any> = useRef()
    const yoRef:MutableRefObject<any> = useRef()
  

    const handleClick = ( e:MouseEvent<HTMLDivElement>):void=>{
            setDivWidth('100vw')
            setDivHeigth('100vh')
            console.log(e.currentTarget.id)
            switch (e.currentTarget.id) {
                case 'yo':
                    frontEndRef.current.style.display = "none"
                    illustracionRef.current.style.display = "none"
                    contactoRef.current.style.display = "none"
                    break;
                case 'frontEnd':
                    yoRef.current.style.display = "none"
                    illustracionRef.current.style.display = "none"
                    contactoRef.current.style.display = "none"
                    break;
                case 'ilustracion':
                    yoRef.current.style.display = "none"
                    frontEndRef.current.style.display = "none"
                    contactoRef.current.style.display = "none"
                    break;
                case 'contacto':
                    yoRef.current.style.display = "none"
                    frontEndRef.current.style.display = "none"
                    illustracionRef.current.style.display = "none"
                    break;
                default:
                    break;
            }

            setDivContent(!divContent)
            
            
    }


    return (
        
        <div className="menu" style={menu} >
            
                <div style={colorStyles('#002D40')} ref={ yoRef }>
                    
                    {
                        !divContent ? (
                            <TimeLine/>
                        ):(
                           <div className="item-hover" id="yo" onClick={ e => handleClick( e ) }>
                            <img className="menu-img" src={ yo }  alt="yo"/>
                                <h1>Yo</h1>  
                            </div>
 
                        )
                    }
                   
                </div>
                
           
            
                <div style={ colorStyles('#FF414D') } ref={ frontEndRef }>
                   <div className="item-hover" id="frontEnd" onClick={ e  => handleClick( e ) }>
                   <img className="menu-img" src={ frontEnd }  alt="frontEnd"/>
                    <h1>FrontEnd</h1> 
                   </div>
                </div>
            
            
           
                <div style={ colorStyles('#329D9C')  } ref={ illustracionRef } >
                    <div className="item-hover" id="ilustracion" onClick={ ( e ) => handleClick( e )}>
                        <img className="menu-img" src={ illustracion }  alt="illustracion"/>
                        <h1>Ilustracion</h1>
                    </div>
                </div>
            
     
            
            <div style={ colorStyles('#56C596') } ref={ contactoRef }>
                <div className="item-hover" id="contacto" onClick={ ( e ) => handleClick( e )}>
                <img className="menu-img"  src={ contacto }  alt="contacto"/>

                    <h1>
                        Contacto
                    </h1>
                </div>
            </div>
            
        </div>
    )
}
