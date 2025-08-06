import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../components/ButtonComponent';

export const ScreenHome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BIENVENIDO</Text>
            <Image 
            style={styles.image}
            source={{
                uri:'https://cdn-icons-png.flaticon.com/128/2645/2645725.png'
            }}/>
            <View>
                <ButtonComponent title='ACCEDER' operation={()=> navigation.dispatch(CommonActions.navigate({name:'Calcular'}))}/>
            </View>
        </View>
    )
}
