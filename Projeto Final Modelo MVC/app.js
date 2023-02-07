const fs = require('fs');
const express = require('express')
const app = express();
const readline = require('readline');
const Produto = require('./models/Produto');
const ProdutoController = require('./controller/produto-controller.js');
const controller = new ProdutoController();


app.get('/produtos', (req, res) => {
  const produtos = controller.getAllProdutos();
  res.send(produtos);
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('Escolha uma opção:');
  console.log('1. Mostrar todos os produtos');
  console.log('2. Buscar produto por ID');
  console.log('3. Adicionar produto');
  console.log('4. Atualizar produto por ID');
  console.log('5. Deletar produto por ID');
  console.log('6. Sair');
  console.log('');
}

function handleOption(option) {
  switch (option) {
    case '1':
      console.log(controller.getAllProdutos());
      break;
    case '2':
      rl.question('Digite o ID do produto: ', id => {
        console.log(controller.getProdutoById(id));
        showMenu();
        rl.prompt();
      });
      break;
    case '3':
      rl.question('Digite o modelo do produto: ', modelo => {
        rl.question('Digite a especificação do produto: ', especificacao => {
          rl.question('Digite o valor do produto: ', valor => {
            const novoProduto = new Produto(modelo, especificacao, valor);
            controller.addProduto(novoProduto);
            console.log('Produto adicionado com sucesso!');
            showMenu();
            rl.prompt();
          });
        });
      });
      break;
    case '4':
      rl.question('Digite o ID do produto: ', id => {
        rl.question('Digite o novo modelo do produto: ', modelo => {
          rl.question('Digite a nova especificação do produto: ', especificacao => {
            rl.question('Digite o novo valor do produto: ', valor => {
              const produto = new Produto(modelo, especificacao, valor);
              controller.updateProduto(id, produto);
              console.log('Produto atualizado com sucesso!');
              showMenu();
              rl.prompt();
            });
          });
        });
      });

    case '5':
      rl.question('Digite o ID do produto: ', id => {
        controller.deleteProduto(id);
        console.log('Produto deletado com sucesso!');
        showMenu();
        rl.prompt();
      });
      break;
    case '6':
      rl.close();
      break;
    default:
      console.log('Opção inválida');
      showMenu();
      rl.prompt();
      break;
  }
}

rl.on('line', input => {
  handleOption(input);
});

rl.on('close', () => {
  console.log('Até mais!');
});

showMenu();
rl.prompt();

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});