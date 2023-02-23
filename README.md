# Projeto final do curso Programadores Cariocas.<br> 
**Módulo 5**<br> 
**Plataforma:** Node.js<br>
<h3>Tecnologias:</h3><br> 

![image](https://user-images.githubusercontent.com/56053290/218258400-46b576f3-03c0-4557-b984-189c104e5a51.png)
![image](https://user-images.githubusercontent.com/56053290/218258497-d0ddc8bf-a8dc-45b2-aba5-4614700e73d5.png)
![image](https://user-images.githubusercontent.com/56053290/218259194-0cbc46a8-6150-4eb7-8cfb-14846262a0c3.png)

<h1>Introdução</h1>

<h4>Você e sua equipe foram escalados para desenvolverem
propostas de APIs que serão o produto mínimo viável de um
aplicativo.Vocês devem escolher o tema do aplicativo para
identificar as entidades.</h4>

Utilizar o padrão MVC;<br>
⇨ Utilizar os verbos HTTP seguindo o padrão REST;<br>
⇨ Implementar todas as operações de CRUD;<br>
⇨ Utilizar o padrão de projeto (design pattern) DAO para abstração de transações no banco, com Promises;<br>
⇨ Utilizar o README.md do repositório para documentação, contendo informações como:<br>
◼ Como instalar as dependências do projeto;<br>
◼ Como executar o projeto;<br>
◼ Quais são as rotas possíveis;<br>
◼ Quaisquer outros pontos que você achar necessários;<br>
⇨ Utilização de async/await para operações no banco (DAO)<br>
⇨ Ter o código fonte hospedado em um repositório no Github.<br>

<h4>Nesse projeto você e sua squad serão responsáveis por
definir quais são as entidades que o projeto precisa
contemplar e cada um de vocês será responsável por
implementar uma dessas entidades.</h4>

<h2>🖥️Loja de informática</h2><br>

![image](https://user-images.githubusercontent.com/56053290/219756907-f034018d-db62-43f1-be71-bd59446486f6.png)

<h4>Somos uma loja de peças de informática, com inúmeros fornecedores e vendedores.<br> 
Garantimos variedade, preço e o melhor atendimento por cada um de nossos vendedores</h4>

**Nosso diagrama**
![image](https://user-images.githubusercontent.com/56053290/220823027-f4116e6a-2989-4420-b5fb-b762414faa0f.png)

<h2>🗺️Mapeamento das Entidades</h2>

<h3>Fornecedor ↧</h3>

```
ID (CHAVE PRIMÁRIA)
Nome
Endereco
CNPJ

```

<h3>vendedor ↧</h3>

```
ID (CHAVE PRIMÁRIA)
Nome
CPF
```

<h3>Produto ↧</h3>

```
id (CHAVE PRIMÁRIA)
Nome
CPF
Endereco
```

<h3>Venda ↧</h3>

```
ID_venda (CHAVE PRIMÁRIA)
ID_produto (CHAVE ESTRANGEIRA)
ID_cliente (CHAVE ESTRANGEIRA)
ID_vendedor (CHAVE ESTRANGEIRA)
data date
quantidade int
```

<h3>Cliente ↧</h3>

```
ID (CHAVE PRIMÁRIA)
Nome
CPF
Endereco
```


<h2>🚀Frameworks utilizados no projeto:</h2><br>

>`Express, Axios.`

<h2>❔Como abrir o projeto em axios❓</h2><br>
<h3>⚙️Você precisará instalar os seguintes pacotes:</h3><br>
 
>`npm install`<br>
>`npm install express`<br>
>`npm install axios`<br>
>`npm install readline`<br>
>`npm install -g json-server`

<h3>✔️execute o projeto:</h3>

>`json-server --watch db.json`<br>
>`node app.js` (em outro terminal)
<br>
 
 <h2>❔Como abrir o projeto modelo MVC❓</h2><br>
<h3>⚙️Você precisará instalar os seguintes pacotes:</h3><br>

>`npm install`<br>
>`npm install express`<br>
>`npm install sqlite3`<br>
>`npm install cors`

<h4>🎲Então vamos executar o script que cria nosso banco dentro da pasta '/infra', Seguindo o comando:</h4>

>`node create-and-populate.js`

 <h3>✔️execute o projeto:</h3>
 
 <sup>OBS: definido no package.json ("start": "node ./src/server.js")<sup>
 
>`npm start`
 
<h3>⚙️Como dev:</h3>
 
<sup>OBS: definido no package.json ("dev": "nodemon ./src/server.js")<sup>
 
>`npm run dev`

<br>
 
<h1>💡Resumo</h1>
 
 <h3>1 - Primeiramente, vamos falar dos arquivos iniciais...</h3>
<h1>
 
 ```
 Server.js
 index.js
 ```
 </h1>
   
  //\\\\///\\\//\\\ **`index.js`**//\\\\///\\\//\\\
   
 
 **Aqui estamos importando Cors e Express, esses que serão utilizados em nosso projeto.**<br>
 
 <sub>caminho `./src/index.js`</sub><br>
```
const express = require('express')
const cors = require('cors')
```
 
 **Neste momento instanciamos o servidor, colocando uma constante app para receber o express.**<br>
 **Em seguida configuramos ele para receber requisições com o corpo no formato JSON, e requisições CORS para que o servidor responda a solicitações de qualquer domínio.**<br>
 
 <sub>caminho `./src/index.js`</sub><br>
```
const app = express()
app.use(express.json());
app.use(cors())
```
 
  **Agora vamos importar os controllers.**
 
 <sub>caminho `./src/index.js`</sub><br>
 ```
const ProdutoController = require ('./controllers/produto-controller')
ProdutoController.rotas(app)

const FornecedorController = require('./controllers/fornecedor-controller')
FornecedorController.rotas(app)

const ClienteController = require('./controllers/cliente-controller')
ClienteController.rotas(app)

const VendedorController = require ('./controllers/vendedor-controller')
VendedorController.rotas(app)

const VendaController = require('./controllers/venda-controller')
VendaController.rotas(app)
 ```

 **Então exportamos o App para ser usado em outro lugar da nossa aplicação.**<br>
 
 <sub>caminho `./src/index.js`</sub><br>
 ```
 module.exports = app
 ```
  
  //\\\\///\\\//\\\  **`server.js`** //\\\\///\\\//\\\
 
 **Importamos o index.js definindo a constante app para recebe-lo.**<br>
 
 <sub>caminho `./src/server.js`</sub><br>
 ```
const app = require('./index.js')
 ```
 
 **Criamos uma constante chamada port recebendo o número 3000.**<br>
 
 <sub>caminho `./src/server.js`</sub><br>
 ```
 const port = 3000
 ```
 
 **Aqui definimos a constante app para receber um evento de escuta abrindo o servidor na URL `http://localhost:` e na porta definida acima**<br>
 
 <sub>caminho `./src/server.js`</sub><br>
 ```
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}/`)
})
 ```
 
 
 <h3>2 - Agora, vamos falar dos arquivos que estruturam e criam o nosso banco de dados...</h3>
 <h1>
  
 ```
create-and-populate.js
db.js
 ```
 </h1>
 
  //\\\\///\\\//\\\ **`create-and-populate.js`**//\\\\///\\\//\\\
 
 **Começando com o nosso script que cria e popula o nosso banco, o mesmo só deve ser executado uma vez...**<br>
 **Importamos a biblioteca sqlite3 e instanciamos o objeto Database para retornar e interagir com nosso banco.**<br>
 
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ```
 const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
 ```
 
 **Aqui estamos chamando uma instrução SQL para criar uma tabela chamada Produtos com os 4 atributos abaixo.**<br>
 
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ```
const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "MODELO" varchar(64),
    "ESPECIFICACAO" varchar(64),
    "VALOR" varchar(64)
  );`;
 ```
 
 **Então fazemos a inserção na nossa tabela passando dados para seus respectivos atributos.**<br>
 
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ```
 const ADD_PRODUTOS_DATA = `
  INSERT INTO PRODUTOS (ID, MODELO, ESPECIFICACAO, VALOR)
  VALUES 
      (1, 'Monitor Gamer LG 24 LED Full HD 144Hz', 'HDMI x2, DisplayPort, AMD RADEON FreeSync, LG, 24GL600F, LED, 23.6', 'R$1.170,00'),
      (2, 'PLACA DE VIDEO MSI RADEON RX 6500 XT', '1 x DisplayPort (v1.4a) 1 x HDMI (suporta 4K@120Hz/8K@60Hz e VRR conforme especificado em HDMI 2.1, LED, 23.6', 'R$1.299,99'),
      (3, 'SSD Kingston A2000 500GB', 'Velocidade de leitura/escrita de 2500/2000 MB/s, NVMe', 'R$239.99'),
      (4, 'Teclado Logitech K810', 'Teclado sem fio, retroiluminado, Bluetooth', 'R$139.99'),
      (5, 'Pendrive', '16GB', 'R$20')
  `
 ```
 
 **Agora criamos a função responsável pela criação da nossa tabela no banco e passamos um callback para verificar se ocorrerá algum erro durante o processo de criação da tabela. Caso ocorra um erro, ele será retornado no "if".**<br>
 
<sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ```
function criaTabelaProduto() {
    db.run(PRODUTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de produtos");
    });
}
 ```

 **Então criamos a função responsável pela inserção (popular) da nossa tabela no banco e passamos um callback para verificar se ocorrerá algum erro durante o processo de inserção na tabela. Caso ocorra um erro, ele será retornado no "if".**<br>
 
<sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ```
function populaTabelaProduto() {
    db.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de produtos");
    });
}
 ```
 
 <br>**Funções para serem executadas em ordem, uma após a outra dentro da função serialize(). Ao final da execução dessas funções, o banco de dados será criado e populado com as informações passadas.**<br>
 
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ```
 db.serialize( ()=> {
    criaTabelaProduto();
    populaTabelaProduto();
 ```
 
//\\\\///\\\//\\\ **`db.js`**//\\\\///\\\//\\\

 **Localizado em `./src/infra/db.js` importamos a biblioteca SQLite, definindo uma constante chamada sqlite3 para recebe-lo**<br>
 
<sub>caminho `./src/infra/db.js`</sub><br>
 ```
const sqlite3 = require('sqlite3').verbose();
 ```
 
 **Criação do objeto Database, que será usado para executar operações no banco de dados.**<br>
 
 <sub>caminho `./src/infra/db.js`</sub><br>
  ```
const db = new sqlite3.Database('./src/infra/database.db');
  ```
 
 
 **Aqui nessa parte, ele chama o process.on para encerrar a conexão com o banco, e o método close() do objeto db. <br>
 **Logo após finalizando com process.exit(0).**<br>
 
 <sub>caminho `./src/infra/db.js`</sub><br>
 ```
 process.on('SIGINT', () =>
    db.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);
 ```
 
 **E por fim a exportação do objeto "db" para que possa ser usado em outros lugares de nossa aplicação.**<br>
 
 <sub>caminho `./src/infra/db.js`</sub><br>
 ```
module.exports = db;
 ```

