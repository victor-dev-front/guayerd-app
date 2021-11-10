import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css'; 
import reportWebVitals from './reportWebVitals';
import Layout from "./layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
