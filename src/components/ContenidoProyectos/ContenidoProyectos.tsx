import React, { FC, useState } from 'react'
import { Content } from '../StylesComponents/ContentStyles'

import p1 from '../../img/fizhart/krab.png'
import Proyecto from './Proyecto'
import fizh1 from '../../img/front/fizhart1.png'
import fizh2 from '../../img/front/fizhart2.png'
import fizh3 from '../../img/front/fizhart3.png'
import OryMago from '../../img/fizhart/OryMago.png'
import ilustracion from '../../img/fizhart/illustracion.png'
import trabajando from '../../img/fizhart/trabajando.png'

import c1 from '../../img/front/c1.png'
import c2 from '../../img/front/c2.png'
import c3 from '../../img/front/c3.png'



interface PropsContent {
  handleClose: Function
}

export interface imgenes {
  id : number ,
  nombre : string,
  cliente : string ,
  tecnica : string,
  liga? : string,
  imgProyecto : {
    img:any
  }
  descripcion : string
  img :imgType []
} 

export interface imgType {
  src : any ,
  alt : string
}


export const contenidoProyectos:imgenes[] = [
  {
      id : 1 ,
      nombre : 'página web para Fizharts',
      cliente : 'Fizharts',
      tecnica : 'html5 JavaScript , php , Css3',
      liga : 'http://fizharts.com/',
      imgProyecto : {
        img : fizh1
      },
      descripcion : 'Se realizo la página web desde la toma de requerimientos hasta la maquetación y programación de la misma , la creación de imágenes vectoriales y retoque fotográfico.',
      img : [
          {
              src : fizh1,
              alt : 'fizh1'
          },
          {
              src : fizh2,
              alt :  'fizh1'
          },
          {
              src: fizh3 ,
              alt : 'fizh1'
          }
      ]
  },
  {
      id : 2 ,
      nombre : 'planetas covid',
      cliente : 'Planetas Covid',
      tecnica : 'html5 React , sass ',
      liga : 'https://juliopicazo06.github.io/multimedia/',
      descripcion : 'Proyecto escolar para la especialidad de Diseño multimedia , donde se consumió la Api de la ciudad de méxico de la ocupación hospitalaria en la capital de México y el área metropolitana. transformando datos en imágenes en objetos 3D',
      imgProyecto : {
        img : c1
      },
      img : [
          {
              src : c1,
              alt : 'c1'
          },
          {
              src : c2,
              alt :  'c2'
          },
          {
              src: c3 ,
              alt : 'c3'
          }
      ]
  }
]
const ContenidoProyectos: FC<PropsContent> = ({
  handleClose
}: PropsContent): JSX.Element => {

  const [modalContentido, setmodalContentido] = useState({
    descripcion : '',
    img :[] ,
    imgProyecto : {
      img : ''
    },
    nombre : '',
    cliente : '',
    tecnica : '',
    liga : ''
  })




  console.log(contenidoProyectos)
  const handleThumbnail = (src:string)=> {
    setmodalContentido({
      ...modalContentido ,
      imgProyecto : {
        img : src
      }
    });
  }

  const handleClick = (
                        descripcion: string , 
                        img:[] , 
                        imgProyecto:any , 
                        nombre:string,
                        cliente:string,
                        tecnica:string,
                        liga:string = ''
                        )=> {
                          setmodalContentido({
                            ...modalContentido,
                            descripcion,
                            img,
                            imgProyecto,
                            nombre,
                            cliente,
                            tecnica,
                            liga
                          })
                      }
  return (
    <Content color={'#7BE495'}>
      <div id='' className='  mouse row flex column end'>
        <div className=''>
          <div className='col-xs-1-12 cursor ' data-text='frontEnd'>
            <div
              className='cursor flex column end mt-3 pr-6 roboto f-30 bold '
              style={{
                paddingRight: '20px'
              }}
              data-text='frontEnd'
              onClick={e => handleClose(e)}
            >
              X
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <h1 className='mouse'> Proyectos Front-End</h1>
        </div>
        <div className='row mouse'>
        <p className="pt-3 pb-3">
        Un poco de código con React como Librería de desarrollo combinando con Sass para lograr un código cada vez más óptimo.

          </p>
        </div>
        <div className=' items flex rowS flexStart'>
        {/* <Proyecto img={OryMago} titulo={'mago'}  /> */}
        {
          contenidoProyectos.map((item:imgenes)=> (
            <div
            className='item-img pr-5 cursor flex column'
            style={{
              marginRight: '14px'
            }}
            data-bs-toggle='modal'
            onClick={e=>handleClick(
                      item.descripcion , 
                      item.img as [] , 
                      item.imgProyecto , 
                      item.nombre ,
                      item.cliente,
                      item.tecnica,
                      item.liga
                      )}
            data-bs-target='#exampleModal'
          >
            <img className='mr-5' src={item.imgProyecto.img} />
            <span className='proyectoNombre mouse pl-5 f-18 pt-2 flex column centrar'>
              <p>{item.cliente}</p>
            </span>
          </div>
          ))
        }
          
    
        </div>
      </div>

      <div>
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-lg'>
            <div className='modal-content colorFondo'>
              <div className='modal-header'>
                <h3 className='modal-title mouse letraCapital' id='exampleModalLabel'>
                  {modalContentido.nombre}
                </h3>
                &nbsp;&nbsp;
                {
                     modalContentido.liga!=='' ? (
                       <a className="btn btn-danger ml-5 pl-4" href={modalContentido.liga} target="_blank">Ir al Proyecto</a>
                     ):null 
                   }
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className=''>
                  <img className='imagenPrincipal' src={modalContentido.imgProyecto.img } />
                </div>
                <div className='thumbmail-container'>
                  {
                    modalContentido.img.map((item:{src:string})=> (
                      <img src={item.src} key={item.src} className='thumbmail' onClick={()=>handleThumbnail(item.src)} />

                    ))
                  }
                </div>
                <p className='mouse f-18'>
                  Cliente : {modalContentido.cliente} <br />
                  Técnica : {modalContentido.tecnica}
                  <br />
                  Descripción : {modalContentido.descripcion} <br/>
                  
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}

export default ContenidoProyectos
