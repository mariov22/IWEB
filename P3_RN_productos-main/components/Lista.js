import { Button, FlatList, View } from "react-native";

export default function Lista (props) {
    return(
        <View testID = "productosresultados">
            <FlatList>
            {props.theproducts.map((item, index) => (
                <View testID = {"item_"+index}>
                    <Image
                        testID="imagen"
                        source={item.images[0]}
                        style={{ width: 100, height: 100 }} // Adjust dimensions as needed
                    />
                    <Text testID = {"title_"+index}>{item.title}</Text>
                    <Text testID = {"descripcion_"+index}>{item.description}</Text>
                    <Button testID = {"button_"+index}></Button>
                </View>
            ))}
            </FlatList>
        </View>
    );
}