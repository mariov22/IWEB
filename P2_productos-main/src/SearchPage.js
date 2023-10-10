import Lista from "./Lista"
import { useState } from "react";

export default function SearchPage(props){

    const [filtro, setFiltro] = useState("");
    const [estado, setEstado] = useState(props.theproducts);

    function pintaFiltro(filtro) {
   
        const arrayFiltro = props.theproducts.filter((item) => {
            item.title.toLowerCase().inlcudes(filtro.toLowerCase())
        })
        setEstado(arrayFiltro);
    }
    
    return(
        <div id = "resultados">
            <h2 id = "catálogo"> catálogo: </h2>
            <input id = "filtro" placeholder="Escriba lo que quiere buscar" type = "text" value={filtro} onChange={e => setFiltro(e.target.value)} ></input>
            <button id = "buscador" onClick={pintaFiltro(filtro)}> Buscar </button>
            <Lista theproducts = {estado}/>
        </div>
    )
}