import Lista from "./Lista"
import { useState } from "react";

export default function SearchPage(props){

    const [filtro, setFiltro] = useState("");
    const [estado, setEstado] = useState(props.theproducts);
    const [categoria, setCategoria] = useState();

    function pintaFiltro() {
   
        setEstado(props.theproducts.filter((item) => {
                return item.title.toLowerCase().includes(filtro.toLowerCase());
        }));

        /*const arrayFiltro = props.theproducts.filter((item) => {
            item.title.toLowerCase().inlcudes(filtro.toLowerCase())
        })
        setEstado(arrayFiltro);*/
    }
    
    return(
        <div id = "resultados">
            <h2 id = "catálogo"> catálogo: </h2>
            <input id = "filtro" placeholder="Escriba lo que quiere buscar" type = "text" value={filtro} onChange={e => setFiltro(e.target.value)} ></input>
            <button id = "buscador" onClick={pintaFiltro}> Buscar </button>
            <label> Filtrar </label>
            <select id = "selector" value = {categoria} onChange={e => setCategoria(e.target.value)}>
                <option> All </option>
                <option></option>
            </select>
            <Lista theproducts = {estado}/>
        </div>
    )
}