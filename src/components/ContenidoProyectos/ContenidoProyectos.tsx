import React, { FC } from 'react'
import { Content } from '../StylesComponents/ContentStyles'
import CloseIcon from '@material-ui/icons/Close'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import p1 from '../../img/fizhart/krab.png'

interface PropsContent {
  handleClose: Function
}
const tileData = [
  {
    img:
    p1,
    title: 'Image',
    author: 'author'
  },
  {
    img:
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Image',
    author: 'author'
  },
  {
    img:
      'https://images.pexels.com/photos/2409503/pexels-photo-2409503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Image',
    author: 'author'
  }
]

const ContenidoProyectos: FC<PropsContent> = ({
  handleClose
}: PropsContent): JSX.Element => {
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
          <h1 className='mouse'> Proyectos </h1>
        </div>
        <div className='row mouse'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            fuga quo quasi, ipsa, tempora omnis, rerum amet architecto nihil
            quia doloremque esse quod saepe qui in. Omnis, expedita porro! Est
            quidem voluptatum, ad assumenda atque vel voluptatem odit ratione
            soluta?
          </p>
        </div>
        <div className=" items flex rowS flexStart">
              <div className="item-img pr-5 cursor flex column" style={{
                    marginRight: '14px'
              }}
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'>
                <img className="mr-5" src={p1}/>
                <span className="proyectoNombre">
                  Tituulo del proyeto
                </span>
              </div>
              <div className="item-img cursor" style={{
                    marginRight: '14px'
              }}>
                <img src={p1}/>
              </div>
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
          <div className='modal-dialog'>
            <div className='modal-content colorFondo'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Nombre del proyecto
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>

                <div className="">
                <img className="imagenPrincipal" src={p1}/>
              
                </div>
                <div className='thumbmail-container'>
                  <img src={p1} className='thumbmail'/>
                  <img src={p1} className='thumbmail'/>
                  <img src={p1} className='thumbmail'/>
                </div>
                <p className='mouse f-18'>
                Cliente : Personajes propios <br/>
                Técnica : Imágenes vectoriales<br/>
                Descripción : Caricaturas para un proyecto propio en el que se tenía como límite 5 minutos para la creación del boceto

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
