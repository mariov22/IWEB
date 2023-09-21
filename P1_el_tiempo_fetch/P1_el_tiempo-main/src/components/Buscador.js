import React from 'react';
import CONFIG from '../config/config_default';

export function functionBuscar() {
    console.log("Buscando");
}

export default function Buscador(props) {
    return (<div>
                <h2 id = "titulo"> El tiempo </h2>
                <input id = "latitud" type = "text" defaultValue={CONFIG.default_lat} /> 
                <input id = "longitud" type = "text" defaultValue={CONFIG.default_lon} />
                <button id = "Buscar" onClick={() => console.log("Buscando")} > Buscar </button>
            </div>
    );
}