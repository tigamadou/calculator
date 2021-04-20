import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);
