import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function MainBody() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-body'>
        <div className='container text-center'>
            <h1>Hello World!</h1>
        </div>
      </div>
    </>
  )
}

export default MainBody
