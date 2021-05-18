import React, { FC } from 'react'
import Sketch from 'react-p5';
import p5Types  from 'p5'


const Prueba:FC<any> = (props) => {
    let x:number = 50 ;
    let y:number = 50 ;
    const setup = (p5 : p5Types , canvasParentRef:Element)=> {
        p5.createCanvas(500, 500).parent(canvasParentRef)
    }

    const draw = (p5:p5Types) => {
        p5.strokeWeight(p5.random(1,255))
        p5.stroke(255 , p5.random(35 , 88))
        p5.point(p5.random(500), p5.random(500))
    }
    return <Sketch setup={setup}  draw={draw}/>
}

export default Prueba
