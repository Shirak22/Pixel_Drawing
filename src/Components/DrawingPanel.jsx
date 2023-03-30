import { useState } from "react";





function DrawingPanel(props) {
    const {width,height } = props; 
    let panel = [];  

    for (let row = 0; row < width; row++) {
        for (let column = 0; column < height; column++) {
            let Pixel = {x:row,y:column}; 
            panel.push(Pixel);
        }
     }
    
    return (
        <section className="DrawingPanel"> 
            {panel.map((pixel)=> 
                <p>X:{pixel.x}, Y:{pixel.y}</p>
            )}
        </section>
    )
}

export default DrawingPanel;