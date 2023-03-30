
import  DrawingPanel  from './Components/DrawingPanel'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Pixel Editor</h1>
      <DrawingPanel width={1} height={1} pixelSize = {10}/>
    </div>
  )
}

export default App
