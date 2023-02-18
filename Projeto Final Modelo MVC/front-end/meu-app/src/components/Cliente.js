import React, { useState, useEffect } from 'react';
import '../css/cliente.css'

function Cliente() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showJson, setShowJson] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/cliente')
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
    <div className='Cliente-style'>
      <h2>Cliente</h2>
      {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button className='botao' onClick={() => setShowJson(!showJson)}>
        {showJson ? 'Esconder' : 'Mostrar'}
      </button>
    </div>
  );
}


export default Cliente;