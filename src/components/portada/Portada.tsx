import React, { FC } from 'react'
import cat from '../../img/cat.png'

export const Portada:FC<any> = () => {
    return (
        <div className="contenedor-portada">
            <div>
                <h1>Julio Eduardo</h1>
                <h1>Picazo Rodriguez</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, culpa quos minima earum sit architecto nulla ipsa. Facere commodi at id odio, nihil, obcaecati sed quidem aut, sapiente accusamus neque.
                </p>
            </div>
            <img src={ cat } />
            <a href="#menu">
                <h1>Hola</h1>
            </a>
        </div>
    )
}
