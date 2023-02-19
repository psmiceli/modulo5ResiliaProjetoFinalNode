const FornecedorDAO = require('../DAO/FornecedorDAO.js')
const Fornecedor = require('../models/Fornecedor.js')



class FornecedorController {
    static rotas(app) {
        app.get('/Fornecedor', FornecedorController.listar)
        app.get('/Fornecedor/id/:id', FornecedorController.buscarPorID)
        app.post('/Fornecedor', FornecedorController.inserir)
        app.put('/Fornecedor/id/:id', FornecedorController.atualizaFornecedor)
        app.delete('/Fornecedor/id/:id', FornecedorController.deletarFornecedor)
    }

    // GET para listar
    static async listar(req, res) {

        const fornecedor = await FornecedorDAO.listar()

        res.status(200).send(fornecedor)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const fornecedor = await FornecedorDAO.buscarPorID(req.params.id)

        if (!fornecedor) {

            res.status(404).send("Fornecedor não encontrado")
        }

        res.status(200).send(fornecedor)
    }



    // POST
    static async inserir(req, res) {
        const fornecedor = {
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            cnpj: req.bobdy.cnpj
        }

        if (!fornecedor || !fornecedor.nome || !fornecedor.endereco || !fornecedor.telefone || !fornecedor.cnpj) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await FornecedorDAO.inserir(fornecedor)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Fornecedor criado com sucesso", "Novo fornecedor: ": fornecedor })
    }

    // PUT
    static async atualizaFornecedor(req, res) {
        const id = await FornecedorDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Fornecedor não encontrado')
            return
        }

        const fornecedor = new Fornecedor(req.body.nome, req.body.endereco, req.body.telefone, req.body.cnpj)



        if (!fornecedor || !fornecedor.nome || !fornecedor.endereco || !fornecedor.telefone || !fornecedor.cnpj) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(fornecedor).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await FornecedorDAO.atualizar(req.params.id, fornecedor)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o fornecedor')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Fornecedor: ": fornecedor })

    }


    // DELETE
    static async deletarFornecedor(req, res) {

        const fornecedor = await FornecedorDAO.buscarPorID(req.params.id)

        if (!fornecedor) {
            res.status(404).send("Fornecedor não encontrado")
            return
        }

        const result = await FornecedorDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Fornecedor não deletado' })
            return
        }

        res.status(200).send(result)

    }
}

module.exports = FornecedorController

