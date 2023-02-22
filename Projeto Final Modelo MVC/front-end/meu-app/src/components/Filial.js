import React, { useState, useEffect } from 'react';
import '../css/filial.css'

function Filial() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [showJson, setShowJson] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/Filial')
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
        <div className='Filial-style' >
            <h2>Filial</h2>
            {showJson && <pre>{JSON.stringify(data, null, 2)}</pre>}
            <button className='botao' onClick={() => setShowJson(!showJson)}>
                {showJson ? 'Esconder' : 'Mostrar'}
            </button>

        </div>
    );


}

export default Filial;