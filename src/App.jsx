import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default App
