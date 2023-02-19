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



//==== Clientes
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CPF" varchar(64),
    "ENDERECO" varchar(64)
  );`;



  const ADD_CLIENTES_DATA = `
  INSERT INTO CLIENTES (ID, NOME, CPF, ENDERECO)
  VALUES 
      (1, 'CAIO', '0123456789', 'Rua A, n° 50'),
      (2, 'PABLO', '9876543210', 'Rua B, n° 70'),
      (3, 'RONALD', '4561237890', 'Rua C, n° 30'),
      (4, 'JUAN', '3214567890', 'Rua D, n° 15'),
      (5, 'DANIEL', '0123456987', 'Rua E, n° 45') 
  `
  
function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de clientes");
    });
}


function populaTabelaClientes() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes");
    });
}


//==== Fornecedores
const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "ENDERECO" varchar(64),
    "TELEFONE" number(15),
    "CNPJ" number(11)
  );`;



  const ADD_FORNECEDORES_DATA = `
  INSERT INTO FORNECEDORES (ID, NOME, ENDERECO, TELEFONE, CNPJ)
  VALUES 
      (1, 'Samsung', 'Rua F, n° 50', "11999925418" "00.280.273/0002-18" ),
      (2, 'Apple', 'Rua G, n° 70', "21985693745", "00.623.904/0001-73" ),
      (3, 'Acer', 'Rua H, n° 30', "11985263147", "86.912.086/0001-44"),
      (4, 'Motorola', 'Rua I, n° 15', " 11975632984 ", "62.288.584/0001-08"),
      (5, 'Xiaomi', 'Rua J, n° 45', "11985243719", "29.366.628/0001-97") 
  `
  
function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de fornecedores");
    });
}


function populaTabelaFornecedores() {
    db.run(ADD_FORNECEDORES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de fornecedores");
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

    criaTabelaClientes();
    populaTabelaClientes();
});