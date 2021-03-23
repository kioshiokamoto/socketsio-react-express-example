const express = require('express')
const app = express()
const cors = require('cors')
const socketio = require('socket.io')


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001


const server = app.listen(port, ()=>{
    console.log('Servidor funcionando en puerto: ', port);
})

const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  })
let count = 0
io.on('connection', (socket)=>{

    console.log('Conectado a frontend');
    //Enviar senial de cantidad
    socket.emit('count', count)

    //Recibir senial de incremento de cantidad
    socket.on('increase', ()=>{
        count++
        io.emit('count', count)
    })

    //Recibir senial de desconectarse
    socket.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })
})