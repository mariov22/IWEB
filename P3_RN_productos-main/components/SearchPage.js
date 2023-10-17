import { Button, TextInput, View } from "react-native";
import Lista from "./Lista";
import { useState } from "react";

export default function SearchPage(props){

    const [estado, setEstado] = useState(props.theproducts);
    const [filtro, setFiltro] = useState("");

    function pintaFiltro() {
        setEstado(props.theproducts.filter((item) => {
                return item.title.toLowerCase().includes(filtro.toLowerCase());
        }));
    }

    return(
        <View testID = "cuadro">
            <Text testID = "catalogo">Catálogo</Text>
            <TextInput testID = "filtro" type = "text" value = {filtro} onChange={e => setFiltro(e.target.valueOf)}></TextInput>
            <Button testID = "buscador" onClick={pintaFiltro}>Buscar</Button>
            <Lista theproducts = {estado}/>
        </View>
    );
}