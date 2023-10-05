export default function Tarjeta(props){
    return(
        <div id = "productosresultados">
            <ul>
            {props.theproducts.products.map((item, index) => (
                <li key = {index} className="unproducto">
                    <img alt = "" src = {item.images[0]} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button>VER</button>
                </li>
            ))}
            </ul>
        </div>
    )
}