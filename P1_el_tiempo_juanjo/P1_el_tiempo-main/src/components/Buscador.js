import React from 'react';
import lat from '../App';
import lon from '../App';
import CONFIG from '../config/config_default';
import App from '../App';

export function functionBuscar() {
    console.log("Buscando");
}

export default function Buscador(props) {
    return (<div>
                <h2 id = "titulo"> El tiempo </h2>
                <input value = {lat} id = "latitud" type = "text" defaultValue={CONFIG.default_lat} /> 
                <input value = {lon} id = "longitud" type = "text" defaultValue={CONFIG.default_lon}/>
                <button id = "Buscar" onClick={() => console.log(lat + lon)}> Buscar </button>
            </div>
    );
}