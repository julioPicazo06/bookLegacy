
import React, { FC } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Content } from '../StylesComponents/ContentStyles'
import { TimeLine } from '../TimeLine/TimeLine'
import codeImg from '../../img/code.png'
import gato from '../../img/gato.png'
import GitHubIcon from '@material-ui/icons/GitHub';

// skils 
import angular from '../../img/skills/angular.png';
import reactImg from '../../img/skills/react.png';
import jquery from '../../img/skills/jquery.jpg';
import javaScriptImg from '../../img/skills/javaScript.png';
import nodejs from '../../img/skills/nodejs.png'
import {
  JobsTimeLineContent,
  TimeLineContent,
  TimeLineContentModel
} from '../../Contenidos/TimeLineContent'
import TimeLineGeneral from '../TimeLine/TimeLineGeneral'
import { Timeline } from '@material-ui/lab'

interface ContenidoYoModel {
  handleClose: Function
}

export const ContenidoYo: FC<ContenidoYoModel> = ({
  handleClose
}: ContenidoYoModel): JSX.Element => {
  return (
    <>
      <Content color={'#56C596'}>
        <div id='' className='  mouse row flex column end'>
          <div className=''>
            <div className='col-xs-1-12 cursor ' data-text='yo'>
              <div
                className='cursor flex column end mt-3 pr-6 roboto f-30 bold '
                style={{
                  paddingRight: '20px'
                }}
                data-text='yo'
                onClick={e => handleClose(e)}
              >
                X
              </div>
            </div>
          </div>
        </div>



        <div className='container mouse'>
        <div className='row'>
          <h1 className='mouse '> Acerca de mi </h1>
        </div>
        <div className='row mt-5'>
          
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <img className="img-fluid acerca" src={gato}/>
          </div>
          
          <p className='f-20 col-xs-12 col-sm-12 col-md-9 col-lg-9 semblansa'>
          Mi Gusto por las artes visuales me llevó al Diseño y mi curiosidad 
          por cómo funcionan las cosas : a la programación , Desde entonces 
          el Front-end se a convertido en la piedra angular de mi carrera 
          profesional en la cual he participado tanto en proyectos con normas 
          rigurosas en cuanto al flujo de la información como en desarrollos 
          totalmente libres , así que integró lo mejor de dos mundos que 
          convergen en el front-end.
          <br />
          <a className="btn btn-dark btn-lg mt-2" 
          href="https://drive.google.com/file/d/1a71244TpvgFHgub9G5_ot4hh_Evt6e-q/view?usp=sharing" 
          target="_blank">CV</a>
          &nbsp;
          &nbsp;
        
          <a className="btn btn-dark btn-lg mt-2 pl-5 ml-5" href="https://github.com/julioPicazo06" target="_blank">
          <GitHubIcon />
          </a>
          </p>
         
        </div>
        <br/>
        <div className="row">
          <div className="flex justificar centrar">
            <h3>Skills </h3>
          </div>
          
                <br/>
                <br/>

                <div className="flex rowS mt-5 justificar centrar">
                <img className="img-fluid imagenSkills" src={angular} />
          
          <img className="img-fluid imagenSkills" src={jquery} />
          <img className="img-fluid imagenSkills" src={reactImg} />
          <img className="img-fluid imagenSkills" src={javaScriptImg} />
          <img className="img-fluid imagenSkills" src={nodejs} />
                </div>
          
          
        </div>
          <div className='row'>
            <div className='flex justificar centrar'>
              <h2 className='pt-5 pb-5'> Experiencia Laboral</h2>
            </div>
          </div>

          <Timeline className='mouse' align='alternate'>
            {TimeLineContent.map(
              ({ nombre, fecha, puesto }: TimeLineContentModel) => (
                <TimeLineGeneral
                  key={nombre}
                  nombre={nombre}
                  fecha={fecha}
                  puesto={puesto}
                />
              )
            )}
          </Timeline>
        </div>
        <div className='container mouse'>
          <div className='row'>
            <div className='flex justificar centrar'>
              <h2 className='pt-5 pb-5'> Educacion</h2>
            </div>
          </div>
          <div className='row'>
            <Timeline className='mouse' align='alternate'>
              {JobsTimeLineContent.map(
                ({ nombre, fecha, puesto }: TimeLineContentModel) => (
                  <TimeLineGeneral
                  key={nombre}
                    nombre={nombre}
                    fecha={fecha}
                    puesto={puesto}
                  />
                )
              )}
            </Timeline>
          </div>
        </div>
      </Content>
    </>
  )
}
