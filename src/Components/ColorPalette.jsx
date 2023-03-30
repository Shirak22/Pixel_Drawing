import { useState } from "react";
import Color from "./Color"
function ColorPalette() {
    const [array,setArray] = useState(['#ff0','#f00','#0f0','#00f'])
 
    return ( 
        <section className="colorPalette">

            {
                array.map((color,i) => 
                
                 <Color key={i} color={color} /> 

                )
            }


        </section>
     )
}

export default ColorPalette;