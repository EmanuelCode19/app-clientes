const express = require('express')
const app = express()

app.use(express.static('assets'))

app.get('/login',function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/inicio',function(req, res){
    res.sendFile(__dirname + "/views/principal.html")
})

app.get('/clientes',function(req, res){
    res.sendFile(__dirname + "/views/clientes.html")
})

app.get('/newClientes',function(req, res){
    res.sendFile(__dirname + "/views/newClientes.html")
})

app.get('/verCliente',function(req, res){
    res.sendFile(__dirname + "/views/verCliente.html")
})

app.get('/editarCliente',function(req, res){
    res.sendFile(__dirname + "/views/editarCliente.html")
})

app.get('/interaciones',function(req, res){
    res.sendFile(__dirname + "/views/interaciones.html")
})

app.get('/usuario',function(req, res){
    res.sendFile(__dirname + "/views/usuario.html")
})

app.get('/update',function(req, res){
    res.sendFile(__dirname + "/views/updateUser.html")
})

app.get('/new',function(req, res){
    res.sendFile(__dirname + "/views/newUser.html")
})


app.listen(3000)
console.log('express esta corriendo en el port 3000')
console.log('https://localhost:3000.com')
