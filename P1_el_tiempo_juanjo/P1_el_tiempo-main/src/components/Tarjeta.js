import React from 'react';
import { mock1 } from '../constants/mock';

export function pintarTarjetas() {
    for(let i = 0; i < 4; i++){
        console.log(mock1.daily[i].clouds);
    }
}

export default function Tarjeta() {
    return (
            <div id = "tarjeta">
                <h3> 30/(/2022) </h3>
                <p> Temperatura </p>
                <p> HUmedad </p>
                <p> Nubes: {pintarTarjetas()} </p>
            </div>
            
    );
}