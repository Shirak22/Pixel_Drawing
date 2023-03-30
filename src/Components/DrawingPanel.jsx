import { useState } from "react";
import Pixel from "./Pixel";
import "./DrawingPanel.css"





function DrawingPanel(props) {
    let panel = [];  
    const {width,height,pixelSize} = props;
    const style = {
        width: pixelSize * width + 'px',
        height: pixelSize * height + 'px'
    }
   

    for (let row = 0; row < width; row++) {
        for (let column = 0; column < height; column++) {
            let Pixel = {x:row,y:column}; 
            panel.push(Pixel);
        }
     }


    return (
        <section style = {style} className="DrawingPanel"> 
            {
            panel.map((pixel,i)=> 
                <Pixel key={i} x={pixelSize * pixel.x} y={ pixelSize* pixel.y} size={pixelSize}/>   
            )
            }
        </section>
    )
}

export default DrawingPanel;