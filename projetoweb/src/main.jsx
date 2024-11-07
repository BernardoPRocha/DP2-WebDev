import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Sobre from './routes/Sobre';
import Login from './routes/Login';
import Error from './routes/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="produtos" element={<Produtos />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
