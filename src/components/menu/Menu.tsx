import React, { FC, HtmlHTMLAttributes, MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import CSS from 'csstype'
import yo from '../../img/yo.png'
import contacto from '../../img/contacto.png'
import illustracion from '../../img/illustracion.png'
import frontEnd from '../../img/frontEnd.png'
import { ContenidoYo } from '../ContenidoYo/ContenidoYo'
import { TimeLine } from '../TimeLine/TimeLine'
import ContenidoProyectos from '../ContenidoProyectos/ContenidoProyectos'
import { MenuSection } from '../StylesComponents/ContentStyles'
import ContenidoIllustracion from '../ContenidoIllustracion/ContenidoIllustracion'
import ContenidoContact from '../ContenidoContact/ContenidoContact'



export const Menu: FC<any> = () => {

    const [divWidth, setDivWidth] = useState<string>('50vw')
    const [divHeigth, setDivHeigth] = useState<string>('50vh')
    const menu: CSS.Properties = {
        backgroundColor: '#FF414D',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    const [divContent, setDivContent] = useState<boolean>(true)
    const [frontEndContent, setFrontEndContent] = useState<boolean>(true)
    const [illustartorContent, setIllustartorContent] = useState<boolean>(true)
    const [contactoContent, setContactoContent] = useState<boolean>(true)

    const colorStyles = (color: string): CSS.Properties => (
        {
            backgroundColor: color,
            width: divWidth,
            height: divHeigth,
            display: 'flex',
            transition: 'all 1s'
        }
    )

    const frontEndRef: MutableRefObject<any> = useRef(), menuRef:MutableRefObject<any> = useRef() , illustracionRef: MutableRefObject<any> = useRef(), contactoRef: MutableRefObject<any> = useRef(), yoRef: MutableRefObject<any> = useRef()


    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
        setDivWidth('100vw')
        setDivHeigth('100vh')
        console.log(e.currentTarget.id)
        switch (e.currentTarget.id) {
            case 'yo':
                frontEndRef.current.style.display = "none"
                illustracionRef.current.style.display = "none"
                contactoRef.current.style.display = "none"
                setDivContent(!divContent)
                break;
            case 'frontEnd':
                yoRef.current.style.display = "none"
                illustracionRef.current.style.display = "none"
                contactoRef.current.style.display = "none"
                setFrontEndContent(!frontEndContent)
                break;
            case 'ilustracion':
                yoRef.current.style.display = "none"
                frontEndRef.current.style.display = "none"
                contactoRef.current.style.display = "none"
                setIllustartorContent(!illustartorContent)
                break;
            case 'contacto':
                yoRef.current.style.display = "none"
                frontEndRef.current.style.display = "none"
                illustracionRef.current.style.display = "none"
                setContactoContent(!contactoContent)
                break;
            default:
                break;
        }



    }

    const verTodos:Function = ():void=> {
            setIllustartorContent(true)

            setDivWidth('50vw')
            setDivHeigth('50vh')
            // yoRef.current.style.display = "flex"
            // frontEndRef.current.style.display = "flex"
            illustracionRef.current.style.display = "flex"
            contactoRef.current.style.display = "flex"


            console.log(menuRef.current.style.display)

    }

   

    return (

        <div className="menu" style={menu} ref={menuRef} >

            <div style={colorStyles('#002D40')} ref={yoRef}>

                {
                    !divContent ? (
                        <TimeLine />
                    ) : (
                        <MenuSection>
                            <div className="item-hover" id="yo" onClick={e => handleClick(e)}>
                                <img className="menu-img" src={yo} alt="yo" />
                                <h1>Yo</h1>
                            </div>
                        </MenuSection>

                    )
                }

            </div>



            <div style={colorStyles('#FF414D')} ref={frontEndRef}>
                {frontEndContent ?
                    (<MenuSection>
                        <div className="item-hover" id="frontEnd" onClick={e => handleClick(e)}>
                            <img className="menu-img" src={frontEnd} alt="frontEnd" />
                            <h1>FrontEnd</h1>
                        </div>
                    </MenuSection>
                    )
                    : (
                        <ContenidoProyectos />
                    )

                }
            </div>



            <div style={colorStyles('#329D9C')} ref={illustracionRef} >
                {
                    illustartorContent ? (
                        <MenuSection>
                    <div className="item-hover" id="ilustracion" onClick={(e) => handleClick(e)}>
                        <img className="menu-img" src={illustracion} alt="illustracion" />
                        <h1>Ilustracion</h1>
                    </div>
                </MenuSection>
                    ):(
                        <ContenidoIllustracion verTodos={verTodos}   />
                    )
                }
                
            </div>



            <div style={colorStyles('#56C596')} ref={contactoRef}>
                {
                    contactoContent ? (
                                <MenuSection>
                                    <div className="item-hover" id="contacto" onClick={(e) => handleClick(e)}>
                                        <img className="menu-img" src={contacto} alt="contacto" />

                                        <h1>
                                            Contacto
                                        </h1>
                                    </div>
                                </MenuSection>
                        ):(
                            <ContenidoContact/>
                        )
                }
                
            </div>

        </div>
    )
}
