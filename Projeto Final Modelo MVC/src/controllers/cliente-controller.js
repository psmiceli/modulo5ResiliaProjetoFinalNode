const { bdCliente } = require('../infra/bd.js')
const Cliente = require('../models/Cliente.js')

class ClienteController {

    static rotas(app) {
        app.get('/Cliente', ClienteController.listar)
        app.get('/Cliente/id/:id', ClienteController.buscarPorID)
        app.post('/Cliente', ClienteController.inserir)
        app.put('/cliente/id/:id', ClienteController.atualizaCliente)
        app.delete('/Cliente/id/:id', ClienteController.deletar)

    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdCliente)
    }

    //ROTA GET de BUSCAR
    static buscarPorID(req, res) {
        const cliente = bdCliente.find(cliente => cliente.id === req.params.id)

        //se for vazio(se não cliente)  
        if (!cliente) {
            res.send("Cliente não encontrado")
            return
        }

        res.send(cliente)
    }

    //ROTA POST
    static inserir(req, res) {
        const cliente = new Cliente(req.body.id, req.body.nome, req.body.CPF, req.body.endereco )
        bdCliente.push(cliente)
        res.send(bdCliente)
        console.log(req.body)
    }


    //ROTA PUT

    static atualizaCliente(req, res) {
        const cliente = bdCliente.find(cliente => cliente.id === req.params.id)

        if (!cliente) {
            res.send('Cliente não encontrado')
            // res.status(404).send('Cliente não encontrado')
            return 
        }

        cliente.id = req.body.id
        cliente.nome = req.body.nome
        cliente.CPF = req.body.CPF
        cliente.endereco = req.body.endereco
        
        
        // res.status(200).send(bdCliente)
        res.send(bdCliente)
    }



    // ROTA DELETE
    static deletar(req, res) {
        const cliente = bdCliente.find(cliente => cliente.id === req.params.id)

        if (!cliente) {
            res.send("Cliente não encontrado")
            return
        }

        const index = bdCliente.indexOf(cliente);
        bdCliente.splice(index, 1);
        res.send({
            "Mensagem": `O cliente do id ${cliente.id} foi deletado!`
        });
    }


}


module.exports = ClienteController
