import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import './i18n';
import App from './App';

//import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from"react-router-dom";
//loogeliste sulgudega ainult osa


// ./on src kaustast
// vastasel juhul node_modules
// navigeerimiseks (route-miseks):
// 1. npm i react-router-dom
// 2. import {BrowserRouter} from "react-router-dom";
// 3. <BrowserRouter> ümbritseb <App/>
// 4. App.js failis tekitama URLi ja HTMLi vahelisi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>   
  </React.StrictMode>
);


