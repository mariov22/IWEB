import Lista from "./Lista"
import { useState, useEffect } from "react";

export default function SearchPage(props){

    const [filtro, setFiltro] = useState("");
    const [estado, setEstado] = useState(props.theproducts);
    const [categoria, setCategoria] = useState([]);
    const [filterCategory, setFilterCategory] = useState('All');

    function pintaFiltro() {
   
        setEstado(props.theproducts.filter((item) => {
                return item.title.toLowerCase().includes(filtro.toLowerCase());
        }));
    }

    useEffect(() => {
        setCategoria(estado.reduce((category, item) => {
            if(!category.includes(item.category)){
                category.push(item.category);
            }
            return category;
        }, []),)
    },[estado])

    useEffect(() => {
        if (filterCategory === 'All'){
            setEstado((prevEstado) => prevEstado);
        } else {
            setEstado((prevEstado) => prevEstado.filter(item => item.category === filterCategory));
        }
    }, [filterCategory]);
    
    return(
        <div id = "resultados">
            <h2 id = "catálogo"> catálogo: </h2>
            <input id = "filtro" placeholder="Escriba lo que quiere buscar" type = "text" value={filtro} onChange={e => setFiltro(e.target.value)} ></input>
            <button id = "buscador" onClick={pintaFiltro}> Buscar </button>
            <label> Filtrar </label>
            <select id = "selector" value = {filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                <option value = "All">All</option>
                {categoria.map(item => (
                    <option value = {item} key = {item}>{item}</option>
                ))}
            </select>
            <Lista theproducts = {estado}/>
        </div>
    )
}