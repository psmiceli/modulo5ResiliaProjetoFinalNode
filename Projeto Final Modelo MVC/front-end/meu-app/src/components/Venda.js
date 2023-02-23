import React, { useState, useEffect } from 'react';
import '../css/venda.css'

function Venda() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [showJson, setShowJson] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/Venda')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => console.error(error));

    }, []);

    if (loading) {
        return <p>Loading data from API...</p>
    }

    return (
        <div className='Venda-style' >
            <h2>Venda</h2>
            {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
            <button className='botao' onClick={() => setShowJson(!showJson)}>
                {showJson ? 'Esconder' : 'Mostrar'}
            </button>

        </div>
    );


}

export default Venda;