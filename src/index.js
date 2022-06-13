import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Components/Theme/theme-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
);


