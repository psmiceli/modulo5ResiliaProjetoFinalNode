const express = require('express');
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = express();

async function createRecord() {

  const title = await new Promise(resolve => {
    readline.question('Digite o produto para adicionar: ', resolve);
  });

  const body = await new Promise(resolve => {
    readline.question('Digite as especificações: ', resolve);
  });

  const valor = await new Promise(resolve => {
    readline.question('Digite o valor: ', resolve);
  });


  return axios.post('http://localhost:3000/posts', {title, body, valor });
}

async function readRecord() {
  const id = await new Promise(resolve => {
    readline.question('Buscar produto: ', resolve);
  });

  return axios.get(`http://localhost:3000/posts/${id}`);
}

async function updateRecord() {
  const id = await new Promise(resolve => {
    readline.question('Digite o ID do produto para atualizar: ', resolve);
  });

  const title = await new Promise(resolve => {
    readline.question('Digite o novo título do produto: ', resolve);
  });

  const body = await new Promise(resolve => {
    readline.question('Digite o novo conteúdo do produto: ', resolve);
  });

  const valor = await new Promise(resolve => {
    readline.question('Digite o valor do produto: ', resolve);
  });

  return axios.put(`http://localhost:3000/posts/${id}`, {title, body, valor });
}

async function deleteRecord() {
  const id = await new Promise(resolve => {
    readline.question('Digite o ID do produto que deseja excluir: ', resolve);
  });

  return axios.delete(`http://localhost:3000/posts/${id}`);
}

async function showRecords() {
  return axios.get(`http://localhost:3000/posts`)
    .then(response => {
      console.log(response.data);
    });
}

async function showOptions() {
  console.log('Opções:');
  console.log('1. Adicionar ao estoque');
  console.log('2. Buscar produto');
  console.log('3. Atualizar produto');
  console.log('4. Excluir produto');
  console.log('5. Estoque');
  console.log('6. Sair');

  const option = await new Promise(resolve => {
    readline.question('Escolha uma opção: ', resolve);
  });

  switch (option) {
    case '1':
      createRecord()
        .then(response => {
          console.log(response.data);
          return showOptions()
        })
        .catch(error => {
          console.log(error);
        });

      break;

    case '2':
      readRecord()
        .then(response => {
          console.log(response.data);
          return showOptions()
        })
        .catch(error => {
          console.log(error);
          return showOptions()
        });
      break;

    case '3':
      updateRecord()
        .then(response => {
          console.log(response.data);
          return showOptions()
        })
        .catch(error => {
          console.log(error);
        });
      break;

    case '4':
      deleteRecord()
        .then(response => {
          console.log(response.data);
          return showOptions()
        })
        .catch(error => {
          console.log(error);
        });
      break;


    case '5':
      showRecords()
        .then(response => {
          if (response && response.data) {
            console.log(response.data);
          } else {
            console.error("");
          }
          return showOptions();
        })
        .catch(error => {
          console.error(error);
        });
      break;

      case '6':
        readline.close();
        break;
      default:
        console.log('Opção inválida, escolha novamente');
        return showOptions();

  }


}

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
  showOptions();
});