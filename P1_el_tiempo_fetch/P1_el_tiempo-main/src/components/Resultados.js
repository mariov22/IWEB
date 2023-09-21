import React from 'react';
import Tarjeta from './Tarjeta';

export default function Resultados(props){
    return (
            <div id = "resultados">
                <h3> Timezone : Europe/Madrid </h3>
                <p> El tiempo en los próximos días será: </p>
                <Tarjeta />
            </div>
        
    );
}