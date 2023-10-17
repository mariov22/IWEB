import { Link } from "react-router-dom";

export default function Lista(props){
    return(
        <div id = "productosresultados">
            <ul>
            {props.theproducts.map((item, index) => (
                <li className="unproducto" key = {index}>
                    <img alt = "" src = {item.images[0]} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to = {"/products/" + index}><button>VER</button></Link>
                </li>
            ))}
            </ul>
        </div>
    )
}