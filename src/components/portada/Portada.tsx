import React, { FC } from 'react'
import cat from '../../img/cat.png'
import Prueba from '../Prueba/Prueba'
import { Link, animateScroll as scroll } from "react-scroll";
import Imagen from '../Imagen/Imagen';


export const Portada:FC<any> = () => {
    return (
        <div className="contenedor-portada">
            {/* <img src={ cat } className="gato-img" /> */}

            <Imagen width={ 400 } height={ 350 }/>

            <div>
                <div className="name-container">
                    <span className="name-container-uno">
                        Julio Eduardo 
                    </span>
                    <span className="name-container-dos">
                        Picazo Rodriguez    
                    </span>
                </div>
                 <div className="boton-contenedor">
                 <Link to="menu"
                        className="boton-inicio"
                        spy={true}
                        smooth={true}
                        duration={ 500 }>

                        Web Designer / Web Developer / Ilustrator
                        </Link>

                 </div>
                 <div>
                    

                 </div>
               
               
                {/* <Prueba /> */}
            </div>
            
        </div>
    )
}
