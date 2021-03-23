import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

const ENDPOINT = 'http://localhost:3001/'
let server;

function App() {
  const [countFront, setCountFront] = useState(0)
  useEffect(()=>{
    server = io(ENDPOINT)
    server.on('count', (count)=>{
      setCountFront(count)
      console.log('Cuenta: ', count);
    })
  })

  const click = ()=>{
    server.emit('increase')
  }
  
  return (
    <div>
      <h1> Chat </h1>
      <button onClick={click}> Click </button>
      <h1>{countFront}</h1>

    </div>
  )
}

export default App;
