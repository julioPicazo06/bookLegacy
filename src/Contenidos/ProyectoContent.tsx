import cangrejo from '../../img/fizhart/krab.png'
import murcielago from '../../img/fizhart/murci.png'
import pollo from '../../img/fizhart/pollo.png'
import OryMago from '../../img/fizhart/OryMago.png'
import ilustracion from '../../img/fizhart/illustracion.png'
import trabajando from '../../img/fizhart/trabajando.png'



export interface imgenes {
    id : number ,
    nombre : string,
    cliente : string ,
    tecnica : string,
    descripción : string
    img :imgType []
} 

export interface imgType {
    src : any ,
    alt : string
}


export const contenidoProyectos:imgenes[] = [
    {
        id : 1 ,
        nombre : 'Personajes',
        cliente : 'Personajes propios',
        tecnica : 'Imágenes vectoriales',
        descripción : 'Caricaturas para un proyecto propio en el que se tenía como límite 5 minutos para la creación del boceto',
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
        descripción : 'Ory el conejo es un personaje propio registrado ante indautor en el 2014 ',
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