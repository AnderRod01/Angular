import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    document.title= 'Has pulsado ${count} veces'
  })
  return (
    <div>
      <p>Has pulsado {count} veces</p>
      <button onClick={() => setCount(count+1)}> Púlsame</button>
    </div>
  )
}

export default App
