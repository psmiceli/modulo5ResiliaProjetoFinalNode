// Importa o bd.js para poder usar o banco de dados simulado
const db = require("../infra/db");


// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class ClienteDAO {

// GET  --  Função ALL - Retorna todas as linhas. No callback existe o argumento ROWS
  static listar() {
    const query = "SELECT * FROM CLIENTES";
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
    const query = "SELECT * FROM CLIENTES WHERE id = ?";
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
  static inserir(cliente){
    const query = `INSERT INTO CLIENTES (nome, CPF, endereco) VALUES (?, ?, ?)`;

    return new Promise((resolve, reject) => {
      db.run(query, [cliente.nome, cliente.CPF, cliente.endereco], (err) =>{
        if (err){
          reject({
            mensagem: "Erro ao inserir o cliente",
            error:err,
          });
        }
        resolve(cliente);
      });
    });
  }

  // PUT  --  
  static atualizar(id, cliente){
    const query =
    "UPDATE CLIENTES SET nome = ?, CPF = ?, endereco = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [cliente.nome, cliente.CPF, cliente.endereco, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar o cliente",
              erro: err,
            });
          }
          resolve({
            mensagem: "Cliente atualizado com sucesso"
          });
        }
      );


    });
  }

 // DELETE  --  
  static deletar(id){
    const query = "DELETE FROM CLIENTES WHERE id = ?";
    return new Promise((resolve,reject) =>{
      db.run(query, [id], (err) =>{
        if(err){
          reject({
            mensagem: "Erro ao deletar o cliente",
            erro: err,
          });
        }
        resolve({mensagem: "Cliente deletado com sucesso", id: id});
      });
    });
  }
}


// Exporta a classe
module.exports = ClienteDAO;