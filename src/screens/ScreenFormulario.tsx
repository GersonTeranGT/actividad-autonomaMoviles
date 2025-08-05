import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const ScreenFormulario = () => {
    const validacion = /^-?\d*\.?\d*$/;
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState<string | null>(null);

    const dividir = () => {
        const numeroValor1 = Number(valor1);
        const numeroValor2 = Number(valor2);
        if (!valor1 || !valor2) {
            setResultado('');
            Alert.alert('Sin datos para dividir. Por favor, ingrese ambos números');
        } else if (numeroValor1 === 0 && numeroValor2 === 0) {
            setResultado('Indeterminacion');
            Alert.alert('Indeterminacion');
        } else if (numeroValor2 === 0) {
            setResultado('No existe division para cero');
            Alert.alert('No existe division para cero');
        } else {
            const division = (numeroValor1 / numeroValor2).toFixed(2);
            setResultado(division);
        }
    }

    return (
        <View style={styles.containerForm}>
            <Text style={styles.tituloFormulario}>Ingrese los números para hacer la división</Text>
            <Text style={styles.textosInputs}>Número 1:</Text>
            <TextInput
                style={styles.input}
                maxLength={10}
                onChangeText={text => {
                    if (validacion.test(text)) {
                        setValor1(text);
                    }
                }}
                value={valor1}
                placeholder="Ingrese un número"
                keyboardType="numeric"
            />
            <Text style={styles.textosInputs}>Número 2:</Text>
            <TextInput
                style={styles.input}
                maxLength={10}
                onChangeText={text => {
                    if (validacion.test(text)) {
                        setValor2(text);
                    }
                }}
                value={valor2}
                placeholder="Ingrese un número"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={dividir}>
                <Text style={styles.textbutton}>DIVIDIR</Text>
            </TouchableOpacity>
            <Text style={styles.textoResultado}>Resultado: {resultado}</Text>
        </View>
    )
}
