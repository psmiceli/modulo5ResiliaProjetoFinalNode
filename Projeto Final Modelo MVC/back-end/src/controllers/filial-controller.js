const FilialDAO = require('../DAO/FilialDAO.js')
const Filial = require('../models/Filial.js')



class FilialController {
    static rotas(app) {
        app.get('/Filial', FilialController.listar)
        app.get('/Filial/id/:id', FilialController.buscarPorID)
        app.post('/Filial', FilialController.inserir)
        app.put('/Filial/id/:id', FilialController.atualizaFilial)
        app.delete('/Filial/id/:id', FilialController.deletarFilial)
    }

    // GET para listar
    static async listar(req, res) {

        const filial = await FilialDAO.listar()

        res.status(200).send(filial)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const filial = await FilialDAO.buscarPorID(req.params.id)

        if (!filial) {

            res.status(404).send("filial não encontrada")
        }

        res.status(200).send(filial)
    }



    // POST
    static async inserir(req, res) {
        const filial = {
            cidade: req.body.cidade,
            responsavel: req.body.responsavel,
        }

        if (!filial || !filial.cidade || !filial.responsavel) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await FilialDAO.inserir(filial)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Filial criada com sucesso", "Nova Filial: ": filial })
    }

    // PUT
    static async atualizaFilial(req, res) {
        const id = await FilialDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Filial não encontrada')
            return
        }

        const filial = new Filial(req.body.cidade, req.body.responsavel)



        if (!filial.cidade || !filial.responsvel) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(filial).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await FilialDAO.atualizar(req.params.id, filial)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar a filial')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Filial: ": filial })

    }


    // DELETE
    static async deletarFilial(req, res) {

        const filial = await FilialDAO.buscarPorID(req.params.id)

        if (!filial) {
            res.status(404).send("Filial não encontrada")
            return
        }

        const result = await FilialDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Filial não deletada' })
            return
        }

        res.status(200).send(result)

    }
}

module.exports = FilialController