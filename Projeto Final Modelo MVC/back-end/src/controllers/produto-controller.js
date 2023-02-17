const ProdutoDAO = require('../DAO/ProdutoDAO.js')
const Produto = require('../models/Produto.js')



class ProdutoController {
    static rotas(app) {
        app.get('/Produto', ProdutoController.listar)
        app.get('/Produto/id/:id', ProdutoController.buscarPorID)
        app.post('/Produto', ProdutoController.inserir)
        app.put('/produto/id/:id', ProdutoController.atualizaProduto)
        app.delete('/Produto/id/:id', ProdutoController.deletarProduto)
    }

    // GET para listar
    static async listar(req, res) {

        const produto = await ProdutoDAO.listar()

        res.status(200).send(produto)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const produto = await ProdutoDAO.buscarPorID(req.params.id)

        if (!produto) {

            res.status(404).send("Produto não encontrado")
        }

        res.status(200).send(produto)
    }



    // POST
    static async inserir(req, res) {
        const produto = {
            modelo: req.body.modelo,
            especificacao: req.body.especificacao,
            valor: req.body.valor
        }

        if (!produto || !produto.modelo || !produto.especificacao || !produto.valor) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await ProdutoDAO.inserir(produto)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Produto criado com sucesso", "Novo Produto: ": produto })
    }

    // PUT
    static async atualizaProduto(req, res) {
        const id = await ProdutoDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Produto não encontrado')
            return
        }

        const produto = new Produto(req.body.modelo, req.body.especificacao, req.body.valor)



        if (!produto || !produto.modelo || !produto.especificacao || !produto.valor) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(produto).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await ProdutoDAO.atualizar(req.params.id, produto)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o produto')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Produto: ": produto })

    }


    // DELETE
    static async deletarProduto(req, res) {

        const produto = await ProdutoDAO.buscarPorID(req.params.id)

        if (!produto) {
            res.status(404).send("Produto não encontrado")
            return
        }

        const result = await ProdutoDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Produto não deletado' })
            return
        }

        res.status(200).send(result)

    }
}

module.exports = ProdutoController

