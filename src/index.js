import React from 'react';
import ReactDOM from 'react-dom/client';
// import './sass/main.scss';
import Home from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
