import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'; // Importa Routes también

import { NavBar } from './components/NavBar';
import { Products } from './components/Products';
import { Subtitle } from './Second';
import { Shop } from './Shop';
import { FirstPage } from './FirstPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Subtitle/>
      <Routes> {/* Usa Routes en lugar de BrowserRouter */}
        <Route path="/" element={<Navigate to="/tienda" />} />
        <Route path="/tienda" element={<FirstPage/>} />
        <Route path="/products" element={<Shop />} /> {/* Define la ruta de Products */}

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
