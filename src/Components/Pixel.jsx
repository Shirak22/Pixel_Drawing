import './Pixel.css'
function Pixel(props) {
    const {x,y,size} = props; 
    const style = {
        width:size + 'px',
        height: size + 'px',
        top:y,
        left:x,
    }

    return ( 
        <div style={style} className="Pixel"></div>
     );
}

export default Pixel;