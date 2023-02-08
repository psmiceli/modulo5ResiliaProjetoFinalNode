const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const ProdutoController = require ('./controllers/produto-controller')
ProdutoController.rotas(app)


//Fornecedor??


//Cliente??

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})









