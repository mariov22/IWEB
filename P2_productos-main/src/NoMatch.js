import { Link } from "react-router-dom"

export default function NoMatch(props){
    return(
        <div id = "nomatch">
            <p id = "info">Ruta no encontrada</p>
            <Link to = "/"><button id = "volver">Volver</button></Link>
        </div>
    )
}