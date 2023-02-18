const ClienteDAO = require('../DAO/ClienteDAO.js')
const Cliente = require('../models/Cliente.js')



class ClienteController {
    static rotas(app) {
        app.get('/Cliente', ClienteController.listar)
        app.get('/Cliente/id/:id', ClienteController.buscarPorID)
        app.post('/Cliente', ClienteController.inserir)
        app.put('/cliente/id/:id', ClienteController.atualizaCliente)
        app.delete('/Cliente/id/:id', ClienteController.deletarCliente)
    }

    // GET para listar
    static async listar(req, res) {

        const cliente = await ClienteDAO.listar()

        res.status(200).send(cliente)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const cliente = await ClienteDAO.buscarPorID(req.params.id)

        if (!cliente) {

            res.status(404).send("Cliente não encontrado")
        }

        res.status(200).send(cliente)
    }



    // POST
    static async inserir(req, res) {
        const cliente = {
            modelo: req.body.modelo,
            especificacao: req.body.especificacao,
            valor: req.body.valor
        }

        if (!cliente || !cliente.modelo || !cliente.especificacao || !cliente.valor) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await ClienteDAO.inserir(cliente)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Cliente criado com sucesso", "Novo Cliente: ": cliente })
    }

    // PUT
    static async atualizaCliente(req, res) {
        const id = await ClienteDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Cliente não encontrado')
            return
        }

        const cliente = new Cliente(req.body.modelo, req.body.especificacao, req.body.valor)



        if (!cliente || !cliente.modelo || !cliente.especificacao || !cliente.valor) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(cliente).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await ClienteDAO.atualizar(req.params.id, cliente)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o cliente')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Cliente: ": cliente })

    }


    // DELETE
    static async deletarCliente(req, res) {

        const cliente = await ClienteDAO.buscarPorID(req.params.id)

        if (!cliente) {
            res.status(404).send("Cliente não encontrado")
            return
        }

        const result = await ClienteDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Cliente não deletado' })
            return
        }

        res.status(200).send(result)

    }
}

module.exports = ClienteController

