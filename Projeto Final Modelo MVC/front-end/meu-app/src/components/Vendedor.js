import React, { useState, useEffect } from 'react';
import '../css/vendedor.css'

function Vendedor() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [showJson, setShowJson] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/vendedor')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => console.error(error))

    }, []);

    if (loading) {
        return <p>Loading data from API...</p>
    }

    return (
        <div className="Vendedor-style">
            <h2>Vendedor</h2>
            {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
            <button className='botao' onClick={() => setShowJson(!showJson)}>
                {showJson ? 'Esconder' : 'Mostrar'}
            </button>
        </div>
    );

}
export default Vendedor;

