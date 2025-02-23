// Challenge: Implement a button to show/hide the text content
import  { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  
  return (
    <div>
      <button onClick={() => {setShow(!show)}}>Show/hide</button>
      {show && <h1>Hello world!</h1>}
    </div>
  )
}

export default App
