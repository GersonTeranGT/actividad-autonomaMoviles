import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { InputNumber } from '../components/InputNumber';

export const ScreenFormulario = () => {

    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState<string | number>('');

    const dividir = () => {
        const numeroValor1 = Number(valor1);
        const numeroValor2 = Number(valor2);
        let division: number = 0;
        if (!valor1 || !valor2) { //si el input esta vacio el valor es falso y >!< lo convierte en verdadero 
            //y la condicion se cumple si no es falso
            setResultado('');
            Alert.alert('Sin datos para dividir. Por favor, ingrese ambos números');
        } else if (numeroValor1 === 0 && numeroValor2 === 0) {
            setResultado('Indeterminacion');
            Alert.alert('Indeterminacion');
        } else if (numeroValor2 === 0) {
            setResultado('No existe division para cero');
            Alert.alert('No existe division para cero');
        } else {
            division = (numeroValor1 / numeroValor2)
            setResultado(Number(division).toFixed(2));
        }
    }

    return (
        <View style={styles.containerForm}>
            <Text style={styles.tituloFormulario}>Ingrese los números para hacer la división</Text>
            <Text style={styles.textosInputs}>Número 1:</Text>
            <InputNumber value={valor1} onChangeText={setValor1} keyboardType='numeric' />
            <Text style={styles.textosInputs}>Número 2:</Text>
            <InputNumber value={valor2} onChangeText={setValor2} keyboardType='numeric' />
            <TouchableOpacity style={styles.button} onPress={dividir}>
                <Text style={styles.textbutton}>DIVIDIR</Text>
            </TouchableOpacity>
            <Text style={styles.textoResultado}>Resultado: {resultado}</Text>
        </View>
    )
}
