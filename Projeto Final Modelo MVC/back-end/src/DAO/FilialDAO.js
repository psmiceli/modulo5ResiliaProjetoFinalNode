// importa o bd.js para poder usar o banco de dados simulados 
const db = require("../infra/db")

// essa classe encapsula o acesso aa banco de dados. todos  métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class FilialDAO  {

// GET -- função all - retorna todas as linhas. No callback existe o argumento ROWS 
   static listar() {
    const query = "SELECT * FROM FILIAL ";
    return new promise((resolve, reject ) => {
        db.all(query (err, rows ) => {
            if (err ) {
                reject(err );
            }
            resolve(rows );
        });
    });
   }

// GET -- 
static buscarPorID(id) {
    const query = "SELECT * FROM FILIAL WHERE id = ?";
    return new Promise((resolve, reject) => {
        db.get(query, [id], (err, row) => {
            if (err) {
              reject(false);
            }
            resolve(row);
          });
        });
      }

// POST -- 
static inserir(fornecedor){
    const query = `INSERT INTO FILIAL (cidade, responsavel,) VALUES (?, ?,)`;

    return new Promise((resolve, reject) => {
      db.run(query, [filial.cidade, filial.responsavel], (err) =>{
        if (err){
          reject({
            mensagem: "Erro ao inserir a filial",
            error:err,
          });
        }
        resolve(filial);
      });
    });
  }
// PUT-- 
static atualizar(id, cliente){
    const query =
    "UPDATE FILIAL SET cidade = ?, responsavel = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [filial.cidade, filial.responsavel, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar a filial",
              erro: err,
            });
          }
          resolve({
            mensagem: "Filial atualizada com sucesso"
          });
        }
      );


    });
  }

 // DELETE  --  
 static deletar(id){
  const query = "DELETE FROM FILIAL WHERE id = ?";
  return new Promise((resolve,reject) =>{
    db.run(query, [id], (err) =>{
      if(err){
        reject({
          mensagem: "Erro ao deletar a filial",
          erro: err,
        });
      }
      resolve({mensagem: "Filial deletada com sucesso", id: id});
    });
  });
}
}


// Exporta a classe
module.exports = FilialDAO;

