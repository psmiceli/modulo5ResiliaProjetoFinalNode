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

<h2>🖥️Loja de informática(Matriz)</h2><br>

![image](https://user-images.githubusercontent.com/56053290/219756907-f034018d-db62-43f1-be71-bd59446486f6.png)

<h4>Somos uma distribuidora de peças de informática (matriz) que fornece produtos às nossas filiais parceiras.<br> 
Temos diversas filiais para que o produto chegue mais rapidamente até você!</h4>

<h2>🗺️Mapeamento das Entidades</h2>
<h3>Produto: ↧</h3>

>- <h4>id(Primary Key)</h4>
>- <h4>Modelo</h4>
>- <h4>Especificação</h4>
>- <h4>Valor</h4>



<h3>Fornecedor: ↧</h3>

>- <h4>id(Primary Key)</h4>
>- <h4>Nome</h4>
>- <h4>Endereço</h4>
>- <h4>Telefone</h4>
>- <h4>CNPJ</h4>

<h3>Cliente ↧</h3>

>- <h4>id(Primary Key)</h4>
>- <h4>Nome</h4>
>- <h4>CPF</h4>
>- <h4>Endereço</h4>

<h3>Funcionario ↧</h3>

>- <h4>id(Primary Key)</h4>
>- <h4>Nome</h4>
>- <h4>CPF</h4>
>- <h4>Cargo</h4>
>- <h4>Setor</h4>
>- <h4>Funcao</h4>


<h3>Filial ↧</h3>

>- <h4>id(Primary Key)</h4>
>- <h4>Cidade</h4>
>- <h4>Responsável</h4>



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
 
 **Aqui estamos importando Cors e Express, esses que serão utilizados em nosso projeto.**<br>
 <sub>caminho `./src/index.js`</sub><br>
![image](https://user-images.githubusercontent.com/56053290/220719195-701da19c-3da5-48c2-ab90-882ca1e16ec8.png)

 **Neste momento instanciamos o servidor, colocando uma constante app para receber o express.**<br>
 **Em seguida configuramos ele para receber requisições com o corpo no formato JSON, e requisições CORS para que o servidor responda a solicitações de qualquer domínio.**<br>
 <sub>caminho `./src/index.js`</sub><br>
![image](https://user-images.githubusercontent.com/56053290/220719289-c92e0544-d829-4dca-a5b4-6eaf79af0f8d.png)

 
  **Agora vamos importar os controllers.**

 //imagem// 

 **Então exportamos o App para ser usado em outro lugar da nossa aplicação.**<br>
 <sub>caminho `./src/index.js`</sub><br>
 ![image](https://user-images.githubusercontent.com/56053290/220710428-0d01e0e3-2aec-448a-ba07-c6597db5f9e9.png)
 
 **Importamos o index.js definindo a constante app para recebe-lo.**<br>
 <sub>caminho `./src/server.js`</sub><br>
![image](https://user-images.githubusercontent.com/56053290/220719479-56cc53b6-9749-40ae-9437-d0f5cca6e05f.png)
 
 **Criamos uma constante chamada port recebendo o número 3000.**<br>
 <sub>caminho `./src/server.js`</sub><br>
 ![image](https://user-images.githubusercontent.com/56053290/220719835-c71a917f-4c22-4713-9a67-c9bcb7e07867.png)
 
 **Aqui definimos a constante app para receber um evento de escuta abrindo o servidor na URL `http://localhost:` e na porta definida acima**<br>
 <sub>caminho `./src/server.js`</sub><br>
![image](https://user-images.githubusercontent.com/56053290/220719918-8806ff86-0b84-4c72-93a3-51479e7a4475.png)
 
 
 
 <h3>2 - Agora, vamos falar dos arquivos que estruturam e criam o nosso banco de dados...</h3>
 <h1>
  
 ```
create-and-populate.js
db.js
 ```
 </h1>
 
 **Começando com o nosso script que cria e popula o nosso banco, o mesmo só deve ser executado uma vez...**<br>
 **Importamos a biblioteca sqlite3 e instanciamos o objeto Database para retornar e interagir com nosso banco.**<br>
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ![image](https://user-images.githubusercontent.com/56053290/220742091-17c67544-4abe-424d-832b-de59f428fe28.png)
 
 **Aqui estamos chamando uma instrução SQL para criar uma tabela chamada Produtos com os 4 atributos abaixo.**<br>
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ![image](https://user-images.githubusercontent.com/56053290/220747104-c4d5740c-5d7f-4e26-beba-24b4b7ebe1a3.png)
 
 **Então fazemos a inserção na nossa tabela passando dados para seus respectivos atributos.**<br>
 <sub>caminho `./src/infra/create-and-populate.js`</sub><br>
 ![image](https://user-images.githubusercontent.com/56053290/220747336-64f52260-4261-4576-84d3-99b7e3bc7e3a.png)
 
 **Agora criamos a função responsável pela criação da nossa tabela no banco e passamos um callback para verificar se ocorrerá algum erro durante o processo de criação da tabela. Caso ocorra um erro, ele será retornado no "if".**<br>
<sub>caminho `./src/infra/create-and-populate.js`</sub><br>
![image](https://user-images.githubusercontent.com/56053290/220749817-49a35e76-b70c-45d0-99dc-55ea355ecef0.png)

 
 **Então criamos a função responsável pela inserção (popular) da nossa tabela no banco e passamos um callback para verificar se ocorrerá algum erro durante o processo de inserção na tabela. Caso ocorra um erro, ele será retornado no "if".**<br>
<sub>caminho `./src/infra/create-and-populate.js`</sub><br>
![image](https://user-images.githubusercontent.com/56053290/220749968-170cb88f-cf16-4689-a713-3f6425fc2540.png)


