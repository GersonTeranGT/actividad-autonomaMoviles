import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
    operation: () => void;
    title: string;
}

export const ButtonComponent = ({ operation, title }: Props) => {

    return (
        <TouchableOpacity onPress={operation} style={styles.button}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}
