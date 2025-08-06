import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { InputNumber } from '../components/InputNumber';
import { ButtonComponent } from '../components/ButtonComponent';

export const ScreenForm = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState<string | number>('');

    const operation = () => {
        const numberValue1 = Number(value1);
        const numberValue2 = Number(value2);
        let division: number = 0;
        if (!value1 || !value2) { //si el input esta vacio el valor es falso y >!< lo convierte en verdadero 
            //y la condicion se cumple si no es falso
            setResult('');
            Alert.alert('Sin datos para dividir. Por favor, ingrese ambos números');
        } else if (numberValue1 === 0 && numberValue2 === 0) {
            setResult('Indeterminacion');
            Alert.alert('Indeterminacion');
        } else if (numberValue2 === 0) {
            setResult('No existe division para cero');
            Alert.alert('No existe division para cero');
        } else {
            division = (numberValue1 / numberValue2)
            setResult(Number(division).toFixed(2));
        }
    }

    return (
        <View style={styles.containerForm}>
            <Text style={styles.titleForm}>Ingrese los números para hacer la división</Text>
            <Text style={styles.textInputs}>Número 1:</Text>
            <InputNumber value={value1} onChangeText={setValue1} keyboardType='numeric' />
            <Text style={styles.textInputs}>Número 2:</Text>
            <InputNumber value={value2} onChangeText={setValue2} keyboardType='numeric' />
            <ButtonComponent operation={operation} title='DIVIDIR' />
            <Text style={styles.textResult}>Resultado: {result}</Text>
        </View>
    )
}
