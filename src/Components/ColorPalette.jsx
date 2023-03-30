import {useContext, useState } from "react";
import {colorContext} from './Editor'
import Color from "./Color"
import "./ColorPalette.css"

function ColorPalette() {
    const [array,setArray] = useState(['#ff0','#f00','#0f0','#00f','orange','lightBLue','darkgreen','beige'])
    const [mainColor, setMainColor] = useContext(colorContext);
    function clearPixels(){
        setMainColor('');
        let pixels = document.querySelectorAll('[data-pixel]');
            pixels.forEach((pixel)=> {
                pixel.style.background = "rgb(47,47,47)";
                
            }); 
    }
    return ( 
        <section className="colorPalette">
            {
                array.map((color,i) => 
                 <Color key={i} color={color} /> 
                )
            }

            <button onClick={()=> clearPixels()}>Clear</button>
        </section>
     )
}

export default ColorPalette;