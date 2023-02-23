const db = require("../infra/db");

class VendaDAO {

    static listar() {
        const query = "SELECT * FROM VENDAS";
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
        const query = "SELECT * FROM VENDAS WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.get(query, [id], (err, row) => {
                if (err) {
                    reject(false);
                }
                resolve(row);

            });
        });
    }

    static inserir(venda) {
        const query = `INSERT INTO VENDAS(data, quantidade) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(query, [venda.data, venda.quantidade], (err) => {
                if (err) {
                    reject({
                        mensagem: "Erro ao adicionar a venda",
                        error: err,
                    });
                }
                resolve(venda);
            });
        });
    }

    static atualizar(id, venda) {
        const query =
            "UPDATE VENDAS SET data = ?, quantidade = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(
                query,
                [venda.data, venda.quantidade, id],
                (err) => {
                    if (err) {
                        reject({
                            mensagem: "Erro ao atualizar a venda",
                            erro: err,
                        });
                    }
                    resolve({
                        mensagem: "Venda atualizada com sucesso"
                    });
                }
            );

        });
    }


    static deletar(id) {
        const query = "DELETE FROM VENDAS WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(query, [id], (err) => {
                if (err) {
                    reject({
                        mensagem: "Erro ao deletar a venda",
                        erro: err,
                    });
                }
                resolve({ mensagem: "Venda deletada com sucesso", id: id });
            });
        });
    }
}


module.exports = VendaDAO;