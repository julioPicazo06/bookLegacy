import cangrejo from 'img/fizhart/krab.png'
import murcielago from 'img/fizhart/murci.png'
import pollo from 'img/fizhart/pollo.png'
import OryMago from 'img/fizhart/OryMago.png'
import ilustracion from 'img/fizhart/illustracion.png'
import trabajando from 'img/fizhart/trabajando.png'
import { imgContentIllustration, imgContentWeb} from './types'
import fizh1  from 'img/front/fizhart1.png';
import fizh2 from 'img/front/fizhart2.png';
import fizh3 from 'img/front/fizhart3.png';
import  c1  from 'img/front/c1.png';
import c2  from 'img/front/c2.png';
import  c3  from 'img/front/c3.png';


export const contentIllustration:imgContentIllustration[] = [
    {
        id : 1 ,
        nombre : 'Personajes',
        cliente : 'Personajes propios',
        tecnica : 'Imágenes vectoriales',
        imgProyecto : {
          img : cangrejo
        },
        descripcion : 'Caricaturas para un proyecto propio en el que se tenía como límite 5 minutos para la creación del boceto',
        img : [
            {
                src : cangrejo,
                alt : 'cangrejo'
            },
            {
                src : murcielago,
                alt :  'murcielago'
            },
            {
                src: pollo ,
                alt : 'pollo'
            }
        ]
    },
    {
        id : 2 ,
        nombre : 'Diseño de personajes Ory el conejo',
        cliente : 'Personaje propio',
        tecnica : 'Imágenes vectoriales',
        descripcion : 'Ory el conejo es un personaje propio registrado ante indautor en el 2014 ',
        imgProyecto : {
          img : OryMago
        },
        img : [
            {
                src : OryMago,
                alt : 'OryMago'
            },
            {
                src : ilustracion,
                alt :  'ilustracion'
            },
            {
                src: trabajando ,
                alt : 'trabajando'
            }
        ]
    }
  ]

export const contentWeb:imgContentWeb[] = [
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


  export const colors : {
    aboutColor: string,
    frontEndColor: string,
    illustracionColor: string,
    contactoColor: string
  } = {
        aboutColor: '#002D40',
        frontEndColor: '#FF414D',
        illustracionColor: '#329D9C',
        contactoColor: '#56C596'
  }
  