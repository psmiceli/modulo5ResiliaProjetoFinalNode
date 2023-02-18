import React from 'react';
import Produtos from './components/Produto';
import Clientes from './components/Cliente';


function App() {
  return (
    <div>
      <h1>Banco de Dados</h1>
      <Produtos />
      <Clientes/>
    </div>

   
  );
}

export default App;