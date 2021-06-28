import React, { FC } from 'react'

export interface ProyectoProp {
    img:any,
    titulo : string 
}

const Proyecto:FC<ProyectoProp> = ({img, titulo}:ProyectoProp) => {

    console.log(img)
    return (
        <div
            className='item-img pr-5 cursor flex column'
            style={{
              marginRight: '14px'
            }}
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            {/* <img className='mr-5' src={img} /> */}
            <span className='proyectoNombre mouse pl-5 f-18 pt-2 flex column centrar'>
              <p>{titulo}</p>
            </span>
          </div>
    )
}

export default Proyecto
