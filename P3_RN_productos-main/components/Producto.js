export default function Producto (props) {

    let {productId} = useParams();

    return(
        <View testID = "unproducto">
            <Text testID = "detalle">Nombre: {props.theproducts[productId].title}</Text>
            <Image
                testID="imagen"
                source={props.theproducts[productId].images[0]}
                style={{ width: 100, height: 100 }} // Adjust dimensions as needed
            />
            <Text testID = "descripcion">Descripción: {props.theproducts[productId].description}</Text>
            <Text testID = "precio">Precio: {props.theproducts[productId].price}€</Text>
            <Text testID = "rating">Rating: {props.theproducts[productId].rating}</Text>
            <Text testID = "stock">Stock: {props.theproducts[productId].stock}</Text>
            <Button testID = "volver">Volver</Button>
        </View>
    );
}