const { bdProduto } = require('../infra/bd.js')
const Produto = require('../models/Produto.js')

class ProdutoController {

    static rotas(app) {
        app.get('/Produto', ProdutoController.listar)
        app.get('/Produto/id/:id', ProdutoController.buscarPorID)
        app.post('/Produto', ProdutoController.inserir)
        app.delete('/Produto/id/:id', ProdutoController.deletar)

    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdProduto)
    }

    //ROTA GET de BUSCAR
    static buscarPorID(req, res) {
        const produto = bdProduto.find(produto => produto.id === req.params.id)

        //se for vazio(se não produto)  
        if (!produto) {
            res.send("Produto não encontrado")

        }

        res.send(produto)
    }

    //ROTA POST
    static inserir(req, res) {
        const produto = new Produto(req.body.modelo, req.body.especificacao, req.body.valor, req.body.id)
        bdProduto.push(produto)
        res.send(produto.nome)
    }

    // ROTA DELETE
    static deletar(req, res) {
        const produto = bdProduto.find(produto => produto.id === req.params.id)

        if (!produto) {
            res.send("Produto não encontrado")
        }

        const index = bdProduto.indexOf(produto);
        bdProduto.splice(index, 1);
        res.send({
            "Mensagem": `O produto do id ${produto.id} foi deletado`
        });
    }


}


module.exports = ProdutoController

