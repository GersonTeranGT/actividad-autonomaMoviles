import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const ScreenFormulario = () => {

    return (
        <View style={styles.containerForm}>
            <Text style={styles.tituloFormulario}>Ingrese los números para hacer la divición</Text>
            <Text style={styles.textosInputs}>Número 1: </Text>
            <TextInput
                style={styles.input}


                placeholder="Ingrese el primer número"
                keyboardType="numeric"
            />
            <Text style={styles.textosInputs}>Número 2: </Text>
            <TextInput
                style={styles.input}


                placeholder="Ingrese el segundo número"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>DIVIDIR</Text>
            </TouchableOpacity>
        </View>
    )
}
