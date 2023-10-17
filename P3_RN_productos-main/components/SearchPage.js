import { Button, TextInput, View, FlatList, Text, Image } from "react-native";
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
        <View testID = "productosresultados">
            <Text testID = "catalogo">Catálogo</Text>
            <TextInput testID = "filtro" type = "text" value = {filtro} onChangeText={setFiltro}></TextInput>
            <Button testID = "buscador" onPress={() => pintaFiltro(filtro)}>Buscar</Button>
            <Lista theproducts = {estado}/>
        </View>
    );
}