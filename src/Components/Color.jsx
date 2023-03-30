import { useContext } from "react";
import {colorContext} from "./Editor"
function Color(props) {
    
    const {color} = props; 
    const [mainColor, setMainColor] = useContext(colorContext);
    let style = {
        width: '20px',
        height: '20px', 
        background: color
    }
    
    function handleClick(){
        setMainColor(color); 
    }
    
    return ( 
        <div onClick={handleClick} style ={style}></div>
     );
}

export default Color;