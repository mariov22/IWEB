import React from 'react';
import Tarjeta from './Tarjeta';
import { mock1 } from '../constants/mock';

export default function Resultados(props){
    return (
            <div id = "resultados">
                <h3> Timezone : {mock1.timezone} </h3>
                <p> El tiempo en los próximos días será: </p>
                <Tarjeta />
            </div>
        
    );
}