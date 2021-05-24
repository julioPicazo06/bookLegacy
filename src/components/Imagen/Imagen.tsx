import React, { FC } from 'react'
import Sketch from 'react-p5';
import p5Types from 'p5'
import { ImagenModel } from '../Models/Imagen.model';
import cat from '../../img/cat.png'



const Imagen: FC<ImagenModel> = ({ width, height }: ImagenModel) => {

    let img: p5Types.Image;

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(width, height).parent(canvasParentRef)

        img = p5.loadImage('img/cat.png')
        p5.background(img)

    }

    const draw = (p5: p5Types) => {
        p5.image(img, p5.mouseX,p5.mouseY, width, height)

    }

    const mouseClicked = (p5: p5Types)=> {

    }

    return <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />
}

export default Imagen
