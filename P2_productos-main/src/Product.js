import { useParams } from 'react-router-dom';
import Location  from './Location';
import { Link } from 'react-router-dom';

export default function Product(props){
    
    let {productId} = useParams();
    
    return(
        <div id = "product">
            <Location />
            <h3 id = "titulo">Nombre: {props.theproducts[productId].title}</h3>
            <img  src = {props.theproducts[productId].images[0]} alt = ""/>
            <p id = "descripcion">Descripción: {props.theproducts[productId].description}</p>
            <p id = "precio">Precio: {props.theproducts[productId].price}€</p>
            <p id = "rating">Rating: {props.theproducts[productId].rating}</p>
            <p id = "stock">Stock: {props.theproducts[productId].stock}</p>
            <Link to = "/"><button id = "volver">Volver</button></Link>
        </div>
    )
}