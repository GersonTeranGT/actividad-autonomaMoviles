import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
    },
    containerForm: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 5,
    },
    titulo: {
        fontSize: 30,
        padding: 15,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#229adfff',
        borderRadius: 5,
        width: '100%',
        textAlign: 'center'
    },
    imagen: {
        width: 220,
        height: 220,
        marginVertical: 50,
    },
    button: {
        marginTop: 20,
        width: 90,
        height: 60,
        backgroundColor: '#229adfff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10
    },
    textbutton: {

        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingVertical: 10,
    },
    textosInputs:{
        fontSize:30,
        color: 'black',
        marginTop:10
    },
    tituloFormulario:{
        fontSize: 25,
        padding: 5,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#229adfff',
        borderRadius: 5,
        width: '100%',
        textAlign: 'center'
    }
})