import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import '../css/security.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === '123') {
            setIsLoggedIn(true);
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

    if (isLoggedIn) {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
            </BrowserRouter>
        );
    }

    return (  
        <div className='Login-style'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type='text' value={username} onChange={event => setUsername(event.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />
                </label>
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;