import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirtsApp } from './FirtsApp';
import { CounterApp } from "./CounterApp";
//import { Primer } from './primer';


import "./estilos.css";

ReactDOM.createRoot(document.getElementById ("root")).render(
    <React.StrictMode>
        

       

        <CounterApp value={20}  />

        
    </React.StrictMode>
)




