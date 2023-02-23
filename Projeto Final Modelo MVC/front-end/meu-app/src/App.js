import React from 'react';
import ReactDOM from 'react-dom';
import Produtos from './components/Produto';
import Clientes from './components/Cliente';
import Fornecedores from './components/Fornecedor';
import Vendas from './components/Venda';
import Vendedor from './components/Vendedor';
import './css/app.css'


function App() {
  return (
    <div className='DivPai'>
      <h1 className='titule'>Banco de Dados</h1>
      <Produtos />
      <Fornecedores />
      <Clientes/>
      <Vendas />
      <Vendedor />
    </div>

   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;