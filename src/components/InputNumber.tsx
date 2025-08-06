import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
    keyboardType: KeyboardTypeOptions;
}

export const InputNumber = ({ value, onChangeText, keyboardType }: Props) => {
    //Validacion para que los inputs acepten solo numeros
    const validacion = /^-?\d*\.?\d*$/;

    const change = (text: string) => {
        if (validacion.test(text)) {
            onChangeText(text);
        }
    };

    return (
        <TextInput
            style={styles.input}
            maxLength={10}
            value={value}
            onChangeText={change}
            placeholder='Ingrese un número'
            keyboardType={keyboardType}
        />

    )
}
