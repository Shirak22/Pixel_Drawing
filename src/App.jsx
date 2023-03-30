
import  Editor  from './Components/Editor'
import './App.css'
import { useState } from 'react'

function App() {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [pixelSize, setPixelSize] = useState(30);
  
  return (
    <div className="App">
      <h1>Pixel Editor</h1>


      <form >
        <label htmlFor="size">Width</label>
        <input type="number" max={30} name={'width'} placeholder='4' onChange={(e) => setWidth(e.target.value)} />
        <label htmlFor="size">Height</label>
        <input type="number" max={30} name={'height'} placeholder='4' onChange={(e) => setHeight(e.target.value)} />
        <label htmlFor="size">Pixel Size</label>
        <input type="number" max={20} name={'height'} placeholder='30' onChange={(e) => setPixelSize(e.target.value)} />
      </form>

      <Editor width={width} height={height} pixelSize ={pixelSize}/>

      <p>Width: {width}</p>
      <p>height: {height}</p>
    </div>
  )
}

export default App
