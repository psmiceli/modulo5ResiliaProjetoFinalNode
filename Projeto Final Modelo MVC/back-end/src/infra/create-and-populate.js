/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== Produtos
const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "MODELO" varchar(64),
    "ESPECIFICACAO" varchar(64),
    "VALOR" varchar(64)
  );`;



  const ADD_PRODUTOS_DATA = `
  INSERT INTO PRODUTOS (ID, MODELO, ESPECIFICACAO, VALOR)
  VALUES 
      (1, 'Monitor Gamer LG 24 LED Full HD 144Hz', 'HDMI x2, DisplayPort, AMD RADEON FreeSync, LG, 24GL600F, LED, 23.6', 'R$1.170,00'),
      (2, 'PLACA DE VIDEO MSI RADEON RX 6500 XT', '1 x DisplayPort (v1.4a) 1 x HDMI (suporta 4K@120Hz/8K@60Hz e VRR conforme especificado em HDMI 2.1, LED, 23.6', 'R$1.299,99'),
      (3, 'SSD Kingston A2000 500GB', 'Velocidade de leitura/escrita de 2500/2000 MB/s, NVMe', 'R$239.99'),
      (4, 'Teclado Logitech K810', 'Teclado sem fio, retroiluminado, Bluetooth', 'R$139.99'),
      (5, 'Pendrive', '16GB', 'R$20')
  `
  
function criaTabelaProduto() {
    db.run(PRODUTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de produtos");
    });
}


function populaTabelaProduto() {
    db.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de produtos");
    });
}




// EXEMPLO PARA CRIAR OUTRA ROTA/ENTIDADE NO BANCO

// //==== Tarefas
// const TAREFAS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS TAREFAS (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT, 
//     TITULO VARCHAR(64),
//     DESCRICAO TEXT,
//     STATUS VARCHAR(32),
//     DATACRIACAO VARCHAR(32),
//     ID_USUARIO INTEGER,
//     FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
// );`;

// const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
// VALUES 
//        ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
//        ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
//        ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
//        ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
//        ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
//        ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
// `

// function criaTabelaTarefas() {
//     db.run(TAREFAS_SCHEMA, (error)=> {
//         if(error) console.log("Erro ao criar tabela de Tarefas");
//     });
// }


// function populaTabelaTarefas() {
//     db.run(ADD_TAREFAS_DATA, (error)=> {
//        if (error) console.log("Erro ao popular tabela de Tarefas");
//     });
// }

db.serialize( ()=> {
    criaTabelaProduto();
    populaTabelaProduto();
    // criaTabelaTarefas();
    // populaTabelaTarefas();
});