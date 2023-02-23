const VendedorDAO = require('../DAO/VendedorDAO.js')
const Vendedor = require('../models/Vendedor.js')



class VendedorController {
    static rotas(app) {
        app.get('/Vendedor', VendedorController.listar)
        app.get('/Vendedor/id/:id', VendedorController.buscarPorID)
        app.post('/Vendedor', VendedorController.inserir)
        app.put('/Vendedor/id/:id', VendedorController.atualizaVendedor)
        app.delete('/Vendedor/id/:id', VendedorController.deletarVendedor)
    }

    // GET para listar
    static async listar(req, res) {
        const vendedor = await VendedorDAO.listar()
        res.status(200).send(vendedor)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const vendedor = await VendedorDAO.buscarPorID(req.params.id)

        if (!vendedor) {

            res.status(404).send("vendedor não encontrado")
        }

        res.status(200).send(vendedor)
    }



    // POST
    static async inserir(req, res) {
        const vendedor = {
            nome: req.body.nome,
            CPF: req.body.CPF
        }

        if (!vendedor || !vendedor.nome || !vendedor.CPF) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await VendedorDAO.inserir(vendedor)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Vendedor adicionado com sucesso", "Novo Vendedor: ": vendedor })
    }

    // PUT
    static async atualizaVendedor(req, res) {
        const id = await VendedorDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Vendedor não encontrado')
            return
        }

        const vendedor = new Vendedor(req.body.nome, req.body.CPF)

        if (!vendedor || !vendedor.nome || !vendedor.CPF) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(vendedor).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await VendedorDAO.atualizar(req.params.id, vendedor)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar informações do vendedor')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Vendedor: ": vendedor })

    }


    // DELETE
    static async deletarVendedor(req, res) {

        const vendedor = await VendedorDAO.buscarPorID(req.params.id)

        if (!vendedor) {
            res.status(404).send("Vendedor não encontrado")
            return
        }

        const result = await VendedorDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Vendedor não demitido!' })
            return
        }

        res.status(200).send(result)

    }
}

module.exports = VendedorController

