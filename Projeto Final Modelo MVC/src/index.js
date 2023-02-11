// Importando o packages
const express = require('express')

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json());

// importando os controllers
const ProdutoController = require ('./controllers/produto-controller')
ProdutoController.rotas(app)

const FornecedorController = require('./controllers/fornecedor-controller')
FornecedorController.rotas(app)

const ClienteController = require('./controllers/cliente-controller')
ClienteController.rotas(app)



module.exports = app









