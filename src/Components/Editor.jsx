
import { createContext, useState } from "react";
import ColorPalette from "./ColorPalette";
import DrawingPanel from "./DrawingPanel";


export const colorContext = createContext();

function Editor(props) {
    const {width,height,pixelSize} = props; 
    const [mainColor, setMainColor] = useState('');
    console.log(mainColor); 
    return (
        <colorContext.Provider value={[mainColor, setMainColor]} >
            <section>
                <ColorPalette />
                <DrawingPanel width={width} height={height} pixelSize={pixelSize}/>

            </section>

        </colorContext.Provider>
   

    );
}

export default Editor;