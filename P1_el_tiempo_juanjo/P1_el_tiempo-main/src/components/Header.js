import React from 'react';
import logo from './logo.png';

export default function Header() {
    return (
        <header className='myheader'>
            
            <div id = "cabecera">
                <img className = "logo" src={logo} alt={"logo"} />
                <h3 className = "mensaje">{"Bienvenido a Valdemingomez"}</h3>
            </div>
            
        </header>
    );
}