import React, { useState, useEffect } from 'react';
import '../css/cliente.css';

function Cliente() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showJson, setShowJson] = useState(false);
  const [clienteAdicionado, setClienteAdicionado] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/cliente')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [clienteAdicionado]);

  function adicionarNovoCliente() {
    const nome = document.getElementById("nome").value;
    const CPF = document.getElementById("CPF").value;
    const endereco = document.getElementById("endereco").value;

    const novoCliente = {
      nome: nome,
      CPF: CPF,
      endereco: endereco
    };

    adicionarCliente(novoCliente);
  }

  function handleSubmit(event) {
    event.preventDefault();

    adicionarNovoCliente();
    alert('Cliente adicionado!');
  }

  function adicionarCliente(novoCliente) {
    fetch('http://localhost:3000/cliente', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(novoCliente)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setClienteAdicionado(true); // atualiza a variável de estado
      })
      .catch(error => console.error(error));
  }

  if (loading) {
    return <p>Loading data from API...</p>;
  }

  return (
    <div className='Cliente-style'>
      <h2>Cliente</h2>
      {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button className='botao' onClick={() => setShowJson(!showJson)}>
        {showJson ? 'Esconder' : 'Mostrar'}
      </button>
      <div className='dados'>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="CPF">CPF:</label>
        <input type="text" id="CPF" name="CPF" />

        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" />
        <button className='botao' onClick={handleSubmit}>Adicionar Cliente</button>
      </div>

    </div>
  );

}

export default Cliente;
