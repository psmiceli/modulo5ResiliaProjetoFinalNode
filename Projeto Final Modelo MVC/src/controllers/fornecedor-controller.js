const { bdFornecedor } = require('../infra/bd.js')
const Fornecedor = require('../models/Fornecedor.js')

class FornecedorController {

    static rotas(app) {
        app.get('/Fornecedor', FornecedorController.listar)
        app.get('/Fornecedor/id/:id', FornecedorController.buscarPorID)
        app.post('/Fornecedor', FornecedorController.inserir)
        app.delete('/Fornecedor/id/:id', FornecedorController.deletar)
    }


    //ROTA GET
    static listar(req, res) {

        res.send(bdFornecedor)

    }

    //ROTA GET de BUSCAR
    static buscarPorID(req, res) {
        const fornecedor = bdFornecedor.find(fornecedor => fornecedor.id === req.params.id)

        //se for vazio(se não fornecedor)
        if (!fornecedor) {
            res.send("Fornecedor não encontrado")
        }
        res.send(fornecedor)
    }

    //ROTA POST
    static inserir(req, res) {
        const fornecedor = new Fornecedor(req.body.id, req.body.nome, req.body.endereco, req.body.telefone)
        bdFornecedor.push(fornecedor)
        res.send(fornecedor.nome)
    }


    //ROTA PUT

    


    //ROTA DELETE
    static deletar(req, res) {
        const fornecedor = bdFornecedor.find(fornecedor => fornecedor.id === req.params.id)

        if (!fornecedor) {
            res.send("Fornecedor não encontrado!")
        }

        const index = bdFornecedor.indexOf(fornecedor);
        bdFornecedor.splice(index, 1);
        res.send({
            "Mensagem": `O Fornecedor do id ${fornecedor.id} foi deletado`
        })


    }
}

module.exports = FornecedorController