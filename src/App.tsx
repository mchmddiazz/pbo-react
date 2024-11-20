import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <span>Hello world!</span>
      </div>
    </>
  )
}

export default App
