const express = require('express');
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = express();

async function createRecord() {
  const title = await new Promise(resolve => {
    readline.question('Digite o título do registro: ', resolve);
  });

  const body = await new Promise(resolve => {
    readline.question('Digite o conteúdo do registro: ', resolve);
  });

  return axios.post('http://localhost:3000/posts', { title, body });
}

async function readRecord() {
  const id = await new Promise(resolve => {
    readline.question('Digite o ID do registro que deseja ler: ', resolve);
  });

  return axios.get(`http://localhost:3000/posts/${id}`);
}

async function updateRecord() {
  const id = await new Promise(resolve => {
    readline.question('Digite o ID do registro que deseja atualizar: ', resolve);
  });

  const title = await new Promise(resolve => {
    readline.question('Digite o novo título do registro: ', resolve);
  });

  const body = await new Promise(resolve => {
    readline.question('Digite o novo conteúdo do registro: ', resolve);
  });

  return axios.put(`http://localhost:3000/posts/${id}`, { title, body });
}

async function deleteRecord() {
  const id = await new Promise(resolve => {
    readline.question('Digite o ID do registro que deseja excluir: ', resolve);
  });

  return axios.delete(`http://localhost:3000/posts/${id}`);
}

async function showOptions() {
  console.log('Opções:');
  console.log('1. Criar registro');
  console.log('2. Ler registro');
  console.log('3. Atualizar registro');
  console.log('4. Excluir registro');
  console.log('5. Sair');

  const option = await new Promise(resolve => {
    readline.question('Escolha uma opção: ', resolve);
  });

  switch (option) {
    case '1':
      createRecord()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      break;

    case '2':
      readRecord()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      break;

    case '3':
      updateRecord()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      break;

    case '4':
      deleteRecord()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      break;

    case '5':
      readline.close();
      break;

    default:
      console.log('Opção inválida, escolha novamente');
      break;


  }
}

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
  showOptions();
});