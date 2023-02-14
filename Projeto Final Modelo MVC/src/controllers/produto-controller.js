const Produto = require('../models/Produto.js')

// Classe importada exclusivamente para fazer o acesso ao Banco de Dados. Para qualquer operação, ela será utilizada
const ProdutoDAO = require('../DAO/ProdutoDAO')

class ProdutoController {

    static rotas(app) {
        // Rota para os recursos usuario. O parâmtro das rotas aparece na primeira parte entre aspas simples e logo depois são chamados os métodos da classse
        app.get('/Produto', ProdutoController.listar)
        app.get('/Produto/id/:id', ProdutoController.buscarPorID)
        app.post('/Produto', ProdutoController.inserir)
        app.put('/produto/id/:id', ProdutoController.atualizaProduto)
        app.delete('/Produto/id/:id', ProdutoController.deletar)

    }

    //ROTA GET
    static listar(req, res) {
        
        const produto = ProdutoDAO.listar()
        res.status(200).send(produto)
     
    }

    //ROTA GET de BUSCAR
    static buscarPorID(req, res) {
        const produto = ProdutoDAO.buscarPorID(req.params.id)

        //se for vazio(se não produto)  
        if (!produto) {
            res.status(404).send("Produto não encontrado")
            return
        }

        res.status(200).send(produto)
    }

    //ROTA POST
    static inserir(req, res) {
         // Cria um novo usuario recebendo as informações que vem do corpo da requisição através do req.body 
        const produto = {
            id: req.body.id, 
            modelo: req.body.modelo, 
            especificacao: req.body.especificacao, 
            valor: req.body.valor 
            }
        ProdutoDAO.inserir(produto)

        res.status(201).send({"Mensagem": "Produto Criado com Sucesso", "Novo Produto ": produto})

        console.log(req.body)
    }


    //ROTA PUT

    static atualizaProduto(req, res) {
        //Classe ProdutoDAO é chamada com o método de busca pelo id
        const produto = ProdutoDAO.buscarPorID(req.params.id)

        if (!produto) {
            res.status(404).send('Produto não encontrado')
            return 
        }

        produto.id = req.body.id
        produto.modelo = req.body.modelo
        produto.especificacao = req.body.especificacao
        produto.valor = req.body.valor
        
        ProdutoDAO.atualizar(req.params.id, produto)
        
        res.status(200).send({"Mensagem": "Produto atualizado com Sucesso", "Novo Produto ": produto})
    }



    // ROTA DELETE
    static deletar(req, res) {

        const produto = ProdutoDAO.deletar(req.params.id)

        if (!produto) {
            res.status(404).send("Produto não encontrado")
            return
        }
        
        res.status(204).send({
            "Mensagem": `O produto do id ${produto.id} foi deletado!`
        });
    }


}


module.exports = ProdutoController

