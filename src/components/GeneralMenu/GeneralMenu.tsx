import ContenidoContact from "components/ContentContact/ContentContact"
import ContenidoIllustracion from "components/ContentIllustration/ContentIllustration"
import ContenidoProyectos from "components/ContentProyects/ContentProyects"
import { ArrowButton, MenuG, Modulo, MenuSection } from "components/StylesComponents/ContentStyles"
import { FC, useRef, useState, useEffect } from "react"
import { Link } from "react-scroll"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import yoImg from 'img/yo.png';
import frontEndImg from 'img/frontEnd.png';
import illustracionImg from 'img/illustracion.png';
import contactoImg from 'img/contacto.png';
import { colors } from "data/content"
import { ContenidoYo } from "components/ContentMe"

export const MenuGeneral:FC = ():JSX.Element => {

    const divMenu = useRef<HTMLDivElement>(null)
    const [widowSize, setWidowSize] = useState(window.innerHeight)
    const [menuSize, setMenuSize] = useState<number | undefined>(0)
    const [buttonVisible, setButtonVisible] = useState(true)

    window.addEventListener('resize', () =>{
        setWidowSize(window.innerHeight)
    })

    interface visibleModel {
        yo: elementMenu;
        frontEnd: elementMenu;
        illustracion: elementMenu;
        contacto: elementMenu;
    }
    interface elementMenu {
        visible: boolean;
        width: number,
        height: number
    }

    const [visible, setVisible] = useState<visibleModel>({
        yo: {
            visible: true,
            width: 50,
            height: 50
        },
        frontEnd: {
            visible: true,
            width: 50,
            height: 50
        },
        illustracion: {
            visible: true,
            width: 50,
            height: 50
        },
        contacto: {
            visible: true,
            width: 50,
            height: 50
        }
    })

    const handleClick = (e: any) => {
        let dataE = e.target.dataset.text as string
        let noEsta = Object.keys(visible).filter((item) => item != dataE)
        setButtonVisible(!buttonVisible)
        setVisible({
            ...visible,
            [noEsta[0]]: {
                visible: false,
                height: 0,
                width: 0
            },
            [noEsta[1]]: {
                visible: false,
                height: 0,
                width: 0
            },
            [noEsta[2]]: {
                visible: false,
                height: 0,
                width: 0
            },
            [dataE]: {
                width: 100,
                height: 100,
                visible: true
            }
        })


    }


    const handleClose = (e: any) => {
        let dataE = e.target.dataset.text as string
        let noEsta = Object.keys(visible).filter((item) => item !== dataE)
        setButtonVisible(!buttonVisible)
        setVisible({
            ...visible,
            [noEsta[0]]: {
                visible: true,
                height: 50,
                width: 50
            },
            [noEsta[1]]: {
                visible: true,
                height: 50,
                width: 50
            },
            [noEsta[2]]: {
                visible: true,
                height: 50,
                width: 50
            },
            [dataE]: {
                width: 50,
                height: 50,
                visible: true
            }
        })
    }

    useEffect(() => {
        setMenuSize(divMenu.current?.offsetHeight)
    }, [widowSize])


    return (
        <>
            <div ref={ divMenu }>
           
            {
                buttonVisible && (
                    <ArrowButton botom={`-${menuSize ? menuSize -20 : 0}px`} >
                <Link 
                    to="portada"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    
                    <ArrowUpwardIcon />
                </Link>
            </ArrowButton>
                )
            }

            <MenuG  display={'flex'} row={true} wrap={true} color={"#56C596"}>
                <Modulo
                    background={colors['aboutColor']}
                    width={visible.yo.width}
                    height={visible.yo.height}
                    display={visible.yo.visible}>
                    {
                        visible.yo.width === 50 ? (
                            <MenuSection className="flex column justificar center height50">
                                <div className="item-hover"  >
                                    <img className="menu-img" data-text="yo" onClick={(e) => handleClick(e)} src={yoImg} alt="yo" />
                                    <h1 data-text="yo" onClick={(e) => handleClick(e)}>Yo</h1>
                                </div>
                            </MenuSection>
                        ) : (<ContenidoYo handleClose={handleClose} />)
                    }


                </Modulo>
                <Modulo
                    background={colors['frontEndColor']}
                    width={visible.frontEnd.width}
                    height={visible.frontEnd.height}
                    display={visible.frontEnd.visible}>
                    {
                        visible.frontEnd.width === 50 ? (
                            <MenuSection className="flex column justificar center height50">
                                <div className="item-hover" >
                                    <img className="menu-img" data-text="frontEnd" onClick={e => handleClick(e)} src={frontEndImg} alt="frontEnd" />
                                    <h1 data-text="frontEnd" onClick={e => handleClick(e)}>FrontEnd</h1>
                                </div>

                            </MenuSection>
                        ) : <ContenidoProyectos handleClose={handleClose} />
                    }

                </Modulo>
                <Modulo
                    background={colors['illustracionColor']}
                    width={visible.illustracion.width}
                    height={visible.illustracion.height}
                    display={visible.illustracion.visible}>
                    {visible.illustracion.width === 50 ? (<MenuSection className="flex column justificar center height50">
                        <div className="item-hover" >
                            <img className="menu-img" data-text="illustracion" onClick={(e) => handleClick(e)} src={illustracionImg} alt="illustracion" />
                            <h1 data-text="illustracion" onClick={(e) => handleClick(e)}>Ilustracion</h1>
                        </div>


                    </MenuSection>) : <ContenidoIllustracion handleClose={handleClose} />}

                </Modulo>
                <Modulo
                    background={colors['contactoColor']}
                    width={visible.contacto.width}
                    height={visible.contacto.height}
                    display={visible.contacto.visible}>
                    {
                        visible.contacto.width === 50 ? (
                            <MenuSection className="flex column justificar center height50">
                                <div className="item-hover" >
                                    <img className="menu-img" data-text="contacto" onClick={(e) => handleClick(e)} src={contactoImg} alt="contacto" />
                                    <h1 data-text="contacto" onClick={(e) => handleClick(e)}>Contacto</h1>
                                </div>

                            </MenuSection>
                        ) : (
                            <ContenidoContact handleClose={handleClose} />
                        )
                    }

                </Modulo>
            </MenuG>
            </div>
        </>
    )
}
