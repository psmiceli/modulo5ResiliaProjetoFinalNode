// Importa o bd.js para poder usar o banco de dados simulado
const db = require("../infra/db");


// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class FornecedorDAO {

// GET  --  Função ALL - Retorna todas as linhas. No callback existe o argumento ROWS
  static listar() {
    const query = "SELECT * FROM FORNECEDORES";
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

 // GET  --  
  static buscarPorID(id) {
    const query = "SELECT * FROM FORNECEDORES WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.get(query, [id], (err, row) => {
        if (err) {
          reject(false);
        }
        resolve(row);
      });
    });
  }

// POST  --  
  static inserir(fornecedor){
    const query = `INSERT INTO FORNECEDORES (nome, endereco, telefone, cnpj) VALUES (?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
      db.run(query, [fornecedor.nome, fornecedor.endereco, fornecedor.telefone, fornecedor.cnpj], (err) =>{
        if (err){
          reject({
            mensagem: "Erro ao inserir o fornecedor",
            error:err,
          });
        }
        resolve(fornecedor);
      });
    });
  }

  // PUT  --  
  static atualizar(id, fornecedor){
    const query =
    "UPDATE FORNECEDORES SET nome = ?, endereco = ?, telefone = ?, cnpj = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [fornecedor.nome, fornecedor.endereco, fornecedor.telefone, fornecedor.cnpj, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar o fornecedor",
              erro: err,
            });
          }
          resolve({
            mensagem: "Fornecedor atualizado com sucesso"
          });
        }
      );


    });
  }

 // DELETE  --  
  static deletar(id){
    const query = "DELETE FROM FORNECEDORES WHERE id = ?";
    return new Promise((resolve,reject) =>{
      db.run(query, [id], (err) =>{
        if(err){
          reject({
            mensagem: "Erro ao deletar o fornecedor",
            erro: err,
          });
        }
        resolve({mensagem: "Fornecedor deletado com sucesso", id: id});
      });
    });
  }
}


// Exporta a classe
module.exports = FornecedorDAO;