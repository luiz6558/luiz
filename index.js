const express = require("express")
const app = express()
const port = 3000

 // Listar filmes da API

 app.get("/",(req,res) =>{
    res.send("Olá mundo")
 })

 app.listen(port,() =>{
    console.log('Aplicação Rodando')
 })