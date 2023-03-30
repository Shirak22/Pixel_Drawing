import { useContext, useState } from 'react';
import './Pixel.css'
import {colorContext} from "./Editor"
function Pixel(props) {

  
   
    const [active, setActive] = useState(false); 
    const {x,y,size} = props; 
    const [mainColor, setMainColor] = useContext(colorContext);
    const style = {
        width:size + 'px',
        height: size + 'px',
        top:y,
        left:x
    }

    function handleClick(){
           setActive(!active);
    }


    return ( 
        <div onClick = {handleClick} style={style} className={!active ? 'Pixel' : 'Pixel Pixel-click'} ></div>
     )
}

export default Pixel;