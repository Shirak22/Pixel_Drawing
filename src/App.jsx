
import  Editor  from './Components/Editor'
import './App.css'
import { useState } from 'react'

function App() {
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(16);
  const [pixelSize, setPixelSize] = useState(20);
  
  return (
    <div className="App">
      <h1>Pixel Editor</h1>


      <form className='input__form'>
        <section>
          <label htmlFor="size">Width</label>
          <input type="number" max={30} name={'width'} placeholder='16' onChange={(e) => setWidth(e.target.value)} />
        </section>
        <section>
          <label htmlFor="size">Height</label>
          <input type="number" max={30} name={'height'} placeholder='16' onChange={(e) => setHeight(e.target.value)} />
        </section>
        <section>
          <label htmlFor="size">Pixel Size</label>
          <input type="number" max={20} name={'height'} placeholder='20' onChange={(e) => setPixelSize(e.target.value)} />
        </section>
      </form>

      <Editor width={width} height={height} pixelSize ={pixelSize}/>
   
    </div>
  )
}

export default App
