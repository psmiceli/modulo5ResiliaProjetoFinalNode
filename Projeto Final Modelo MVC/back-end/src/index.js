// Importando o packages
const express = require('express')
const cors = require('cors')

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json());
app.use(cors())

// importando os controllers
const ProdutoController = require('./controllers/produto-controller')
ProdutoController.rotas(app)

const FornecedorController = require('./controllers/fornecedor-controller')
FornecedorController.rotas(app)

const ClienteController = require('./controllers/cliente-controller')
ClienteController.rotas(app)

const VendedorController = require('./controllers/vendedor-controller')
VendedorController.rotas(app)

const VendaController = require('./controllers/venda-controller')
VendaController.rotas(app)


module.exports = app
