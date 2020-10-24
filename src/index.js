import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
ReactDOM.render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);



