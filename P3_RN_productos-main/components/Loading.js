import { View } from "react-native";
import Spinner from "react-bootstrap/Spinner"

export default function Loading(props){
    
    if (props.loading){
        return(
            <View>
                <Spinner testID= "loading" animation="border">
                    Loading...
                </Spinner>
            </View>
        );
    }
        
}