import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Data from API:</h1>
      {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={() => setShowJson(!showJson)}>
        {showJson ? 'esconder JSON' : 'mostrar JSON'}
      </button>
    </div>
  );
}

export default Produto;