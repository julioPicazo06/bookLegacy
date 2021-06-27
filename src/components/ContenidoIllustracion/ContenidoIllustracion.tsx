import React, { FC } from 'react'
import { Content } from '../StylesComponents/ContentStyles'
import CloseIcon from '@material-ui/icons/Close'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'



interface PropsIllustracion {
    handleClose:Function
}

const tileData = [
    {
      img:
        'https://images.pexels.com/photos/4201722/pexels-photo-4201722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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

const ContenidoIllustracion:FC<PropsIllustracion> = ({handleClose}:PropsIllustracion):JSX.Element => {
    
   

    return (
        <Content color={"#56C596"}>
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
        <div className='row'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            fuga quo quasi, ipsa, tempora omnis, rerum amet architecto nihil
            quia doloremque esse quod saepe qui in. Omnis, expedita porro! Est
            quidem voluptatum, ad assumenda atque vel voluptatem odit ratione
            soluta?
          </p>
        </div>
        <GridList cellHeight={400}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>

      <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#modalIcono'
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id='modalIcono'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Modal title
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>...</div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Content>
    )
}

export default ContenidoIllustracion
