// src/main.jsx (or src/index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure BrowserRouter is imported
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/toothsavvy-vite/"> {/* <-- Add this line! */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);