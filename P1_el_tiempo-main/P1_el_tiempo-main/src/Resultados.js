import Tarjeta from "./Tarjeta";

export default function Resultados(props){
    return(
        <div id = "resultados">
            <h3> Timezone: {props.items.timezone}</h3>
            <h4> El tiempo en los próximos días será: </h4>
            <Tarjeta resultado = {props.items} numitems = {props.numitems} />
        </div>
    )
}