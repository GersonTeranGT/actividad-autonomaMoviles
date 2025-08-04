import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const ScreenInicio = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>BIENVENIDO</Text>
            <Image 
            style={styles.imagen}
            source={{
                uri:'https://cdn-icons-png.flaticon.com/128/2645/2645725.png'
            }}/>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'Calcular'}))}>
                    <Text style={styles.textbutton}>ACCEDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
