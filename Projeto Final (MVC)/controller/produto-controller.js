const fs = require('fs');
const Produto = require('../models/Produto');
class ProdutoController {

    getAllProdutos() {
        try {
            let produtos = fs.readFileSync('db.json', 'utf-8');
            produtos = JSON.parse(produtos);
            return produtos.map(produto => new Produto(produto.modelo, produto.especificacao, produto.valor, produto.id));
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    getProdutoById(id) {
        try {
            let produtos = fs.readFileSync('db.json', 'utf-8');
            produtos = JSON.parse(produtos);
            const produto = produtos.find(p => p.id === id);
            return new Produto(produto.modelo, produto.especificacao, produto.valor, produto.id);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    addProduto(produto) {
        try {
            let produtos = fs.readFileSync('db.json', 'utf-8');
            produtos = JSON.parse(produtos);
            produto.id = produtos.length + 1;
            produtos.push(produto);
            fs.writeFileSync('db.json', JSON.stringify(produtos));
        } catch (error) {
            console.error(error);
        }
    }

    updateProduto(id, novoProduto) {
        try {
            let produtos = fs.readFileSync('db.json', 'utf-8');
            produtos = JSON.parse(produtos);
            const index = produtos.findIndex(p => p.id === id);
            if (index === -1) return;
            novoProduto.id = id;
            produtos[index] = novoProduto;
            fs.writeFileSync('db.json', JSON.stringify(produtos));
        } catch (error) {
            console.error(error);
        }
    }

    deleteProduto(id) {
        try {
            let produtos = fs.readFileSync('db.json', 'utf-8');
            produtos = JSON.parse(produtos);
            const index = produtos.findIndex(p => p.id === id);
            if (index === -1) return;
            produtos.splice(index, 1);
            fs.writeFileSync('db.json', JSON.stringify(produtos));
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = ProdutoController;