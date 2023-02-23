import React, { useState, useEffect } from 'react';
import '../css/produto.css'

function Produto() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showJson, setShowJson] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/produto')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <p>Loading data from API...</p>;
  }

  return (
    <div className='Produto-style'>
      <h2>Produto</h2>
      {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button className='botao' onClick={() => setShowJson(!showJson)}>
        {showJson ? 'Esconder' : 'Mostrar'}
      </button>
    </div>
  );
}


export default Produto;