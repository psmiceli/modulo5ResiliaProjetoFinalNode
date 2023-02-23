const db = require("../infra/db");

class VendedorDAO {

    static listar() {
        const query = "SELECT * FROM VENDEDOR";
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }


    static buscarPorID(id) {
        const query = "SELECT * FROM VENDEDOR WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.get(query, [id], (err, row) => {
                if (err) {
                    reject(false);
                }
                resolve(row);

            });
        });
    }

    static inserir(vendedor) {
        const query = `INSERT INTO VENDEDOR(nome, CPF) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(query, [vendedor.nome, vendedor.CPF], (err) => {
                if (err) {
                    reject({
                        mensagem: "Erro ao adicionar o vendedor",
                        error: err,
                    });
                }
                resolve(vendedor);
            });
        });
    }

    static atualizar(id, vendedor) {
        const query =
            "UPDATE VENDEDOR SET nome = ?, CPF = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(
                query,
                [vendedor.nome, vendedor.CPF, id],
                (err) => {
                    if (err) {
                        reject({
                            mensagem: "Erro ao atualizar o vendedor",
                            erro: err,
                        });
                    }
                    resolve({
                        mensagem: "Vendedor atualizado com sucesso"
                    });
                }
            );

        });
    }


    static deletar(id) {
        const query = "DELETE FROM VENDEDOR WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(query, [id], (err) => {
                if (err) {
                    reject({
                        mensagem: "Erro ao deletar o vendedor",
                        erro: err,
                    });
                }
                resolve({ mensagem: "Vendedor deletado com sucesso", id: id });
            });
        });
    }
}


module.exports = VendedorDAO;