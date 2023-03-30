import { useContext, useState } from 'react';
import './Pixel.css'
import {colorContext} from "./Editor"
function Pixel(props) {

    const [active, setActive] = useState(false);
    const {x,y,size} = props; 
    const [mainColor, setMainColor] = useContext(colorContext);
    const [thisColor, setThisColor] = useState(mainColor);
    const style = {
        width:size + 'px',
        height: size + 'px',
        top:y,
        left:x,
        background: thisColor
    }

    function handleClick(){
           setActive(!active);
           setThisColor(mainColor);
    }
    
    return ( 
        <div data-pixel onClick = {handleClick} style={style} className='Pixel' ></div>
     )
}

export default Pixel;