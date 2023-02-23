const VendaDAO = require('../DAO/VendaDAO.js')
const Venda = require('../models/Venda.js')



class VendaController {
    static rotas(app) {
        app.get('/Venda', VendaController.listar)
        app.get('/Venda/id/:id', VendaController.buscarPorID)
        app.post('/Venda', VendaController.inserir)
        app.put('/Venda/id/:id', VendaController.atualizaVenda)
        app.delete('/Venda/id/:id', VendaController.deletarVenda)
    }

    // GET para listar
    static async listar(req, res) {
        const venda = await VendaDAO.listar()
        res.status(200).send(venda)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const venda = await VendaDAO.buscarPorID(req.params.id)

        if (!venda) {

            res.status(404).send("Venda não encontrada")
        }

        res.status(200).send(venda)
    }



    // POST
    static async inserir(req, res) {
        const venda = {
            data: req.body.data,
            quantidade: req.body.quantidade
        }

        if (!venda || !venda.data || !venda.quantidade) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await VendaDAO.inserir(venda)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Registro da venda criado com sucesso", "Nova venda: ": venda })
    }

    // PUT
    static async atualizaVenda(req, res) {
        const id = await VendaDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Venda não encontrada')
            return
        }

        const venda = new Venda(req.body.data, req.body.quantidade)

        if (!venda || !venda.data || !venda.quantidade) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(venda).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await VendaDAO.atualizar(req.params.id, venda)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar a venda')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Venda: ": venda })

    }


    // DELETE
    static async deletarVenda(req, res) {

        const venda = await VendaDAO.buscarPorID(req.params.id)

        if (!venda) {
            res.status(404).send("Venda não encontrada")
            return
        }

        const result = await VendaDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Venda não deletada' })
            return
        }

        res.status(200).send(result)

    }
}

module.exports = VendaController

