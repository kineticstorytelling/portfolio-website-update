import { useState } from 'react'

import './App.css'
// testing 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      </div>
//
    </>
  )
}

export default App
