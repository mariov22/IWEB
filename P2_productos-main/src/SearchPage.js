import Tarjeta from "./Tarjeta"

export default function SearchPage(props){
    return(
        <div id = "resultados">
            <h2 id = "catalogo"> Catálogo: </h2>
            <input id = "filtro"></input>
            <button id = "buscador"></button>
            <Tarjeta theproducts = {props.theproducts}/>
        </div>
    )
}