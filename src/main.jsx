import React from 'react';
import ReactDOM from 'react-dom/client';
 import { FirstApp } from './FirstApp';
//import { CounterApp } from "./CounterApp";
//import { Primer } from './primer';


import "./estilos.css";

 ReactDOM.createRoot(document.getElementById ("root")).render(
    <React.StrictMode>
        

       <FirstApp texto="hola, estoy ofenzo"/>

        {/* <CounterApp value={20}  /> */}

        
    </React.StrictMode>
)




