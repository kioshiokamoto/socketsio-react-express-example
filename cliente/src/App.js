import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const ENDPOINT = 'http://localhost:3001/'
let server;

function App() {
  useEffect(()=>{
    server = io(ENDPOINT)
    server.on('count', (count)=>{
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
    </div>
  )
}

export default App;
