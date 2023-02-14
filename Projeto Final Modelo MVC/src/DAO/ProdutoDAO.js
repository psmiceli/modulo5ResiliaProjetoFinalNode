// Importa o bd.js para poder usar o banco de dados simulado
const { bdProduto } = require("../infra/bd");

// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class ProdutoDAO {
  static listar() {
    return bdProduto;
  }

  static inserir(produto) {
    bdProduto.push(produto);
  }

  static buscarPorID(id) {
    return bdProduto.find((produto) => produto.id === id);
  }

  static deletar(id) {
    const produto = bdProduto.find((produto) => produto.id === id);
    const index = bdProduto.indexOf(produto);
    bdProduto.splice(index, 1);
    return produto;
  }

  static atualizar(id, produto) {
    const produtoAtual = bdProduto.find((produto) => produto.id === id);
    const index = bdProduto.indexOf(produtoAtual);
    bdProduto[index] = produto;
  }
}

// Exporta a classe
module.exports = ProdutoDAO;