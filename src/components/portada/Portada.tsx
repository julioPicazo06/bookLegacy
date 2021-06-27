import { FC } from 'react'
import cat from '../../img/cat.png'
import { Link } from "react-scroll";


export const Portada: FC<any> = () => {
    return (
        <div className="contenedor-portada portada">
            <img src={cat} className="img-fluid" style={{
                maxWidth: "450px"
            }} />



            <div>
                <div className="name-container letraCursiva rotar ">
                    <span className="letraCursiva">
                        Julio Eduardo
                    </span>
                    <span className="letraCursiva">
                        Picazo Rodriguez
                    </span>
                </div>

            </div>
            <div className="mouse f-20 mt-3 pt-3 flex blanco column cuadro">

            

            <p className="textoCapital">
                &nbsp;
                Transformo ideas en código funcional y eficiente...
                &nbsp; &nbsp;y también hago dibujitos.
                &nbsp; 

            </p>



            </div>


            <div className="pt-6 mt-5">
                <Link to="menu"
                    spy={true}
                    smooth={true}
                    duration={500}>

                    <span className="pt-6 mt-6">
                        <i className="material-icons md-36 flecha ">arrow_back_ios_new</i>
                    </span>
                </Link>
            </div>

        </div>
    )
}
