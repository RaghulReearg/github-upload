const io=require("socket.io")(3000)
const express=require("express")
const cors=require('cors')
var app=express()
app.use(cors())
io.on("connection",socket=>{
    socket.emit("chat-message","Hello world")
})