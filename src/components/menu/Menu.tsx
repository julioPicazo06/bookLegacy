import React, { FC, HtmlHTMLAttributes, MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import CSS from 'csstype'
import yo from '../../img/yo.png'
import contacto from '../../img/contacto.png'
import illustracion from '../../img/illustracion.png'
import frontEnd from '../../img/frontEnd.png'
import { ContenidoYo } from '../ContenidoYo/ContenidoYo'
import { TimeLine } from '../TimeLine/TimeLine'
import ContenidoProyectos from '../ContenidoProyectos/ContenidoProyectos'
import { MenuSection  } from '../StylesComponents/ContentStyles'
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


    const [illustration, setillustration] = useState<string>('flex')
    const [frontEndDiv, setFrontEndDiv] = useState<string>('flex')
    const [yoDiv, setYoDiv] = useState<string>('flex')
    const [contactoDiv, setContactoDiv] = useState<string>('flex')


    const colorStyles = (color: string , display:string): CSS.Properties => (
        {
            backgroundColor: color,
            width: divWidth,
            height: divHeigth,
            display: display,
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
                setillustration('none')
                setFrontEndDiv('none')
                setYoDiv('flex')
                setContactoDiv('none')
                setDivContent(!divContent)
                break;
            case 'frontEnd':
                setillustration('none')
                setFrontEndDiv('flex')
                setYoDiv('none')
                setContactoDiv('none')

                setFrontEndContent(!frontEndContent)
                break;
            case 'ilustracion':
                setillustration('flex')
                setFrontEndDiv('none')
                setYoDiv('none')
                setContactoDiv('none')

                setIllustartorContent(!illustartorContent)
                // setillustration('none')
                break;
            case 'contacto':
                setillustration('none')
                setFrontEndDiv('none')
                setYoDiv('none')
                setContactoDiv('flex')


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
            setillustration('flex')
                setFrontEndDiv('flex')
                setYoDiv('flex')
                setContactoDiv('flex')

            menuRef.current.style.width = '100vw'
            menuRef.current.style.height = '100vh'
            menuRef.current.style.display = 'flex!important'
            menuRef.current.style.flexDirection = 'row'
            menuRef.current.style.flexWrap = 'wrap'
    }

   

    return (

        <div className="menu" style={menu} ref={menuRef} >

    

            <div style={colorStyles('#002D40' , yoDiv)} ref={yoRef}>

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



            <div style={colorStyles('#FF414D' , frontEndDiv)} ref={frontEndRef}>
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



            <div style={colorStyles('#329D9C' , illustration)} ref={illustracionRef} >
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



            <div style={colorStyles('#56C596' , contactoDiv)} ref={contactoRef} >
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
