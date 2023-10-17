import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Header(props) {

    return (
        <View testID="cabecera">
            <Image
                testID="logo"
                source={require('../assets/favicon.png')}
                style={{ width: 100, height: 100 }} // Adjust dimensions as needed
            />
            <Text testID="mensaje">Bienvenido a la página de Mario Vicente Albertos</Text>
        </View>
    );
}
