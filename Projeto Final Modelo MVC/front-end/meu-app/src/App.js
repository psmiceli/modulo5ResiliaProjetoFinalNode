import React from 'react';
import ReactDOM from 'react-dom';
import Produtos from './components/Produto';
import Clientes from './components/Cliente';
import Fornecedores from './components/Fornecedor';
import Filiais from './components/Filial';
import './css/app.css'


function App() {
  return (
    <div>
      <h1>Banco de Dados</h1>
      <Produtos />
      <Fornecedores />
      <Clientes/>
      <Filiais />
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