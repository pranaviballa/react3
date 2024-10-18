import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <center><h1>Login page</h1></center>
     <input type='text' placeholder='Enter name'/><br></br>
     <input type='text' placeholder='Enter email'/><br></br>
     <input type='text' placeholder='Enter age'/><br></br>
     <center><input type='submit' value='submit'/></center>

    </>
  )
}

export default App
