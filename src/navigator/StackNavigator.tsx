import { createStackNavigator } from '@react-navigation/stack';
import { ScreenInicio } from '../screens/ScreenInicio';
import { ScreenFormulario } from '../screens/ScreenFormulario';
import { styles } from '../theme/appTheme';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
    return (
        <Stack.Navigator
        screenOptions={{
            
            cardStyle:{
                backgroundColor:'lightblue',
                
            },
            //headerShown:false
            headerStyle:{
                elevation:5,
                backgroundColor:'#0a7eddff'
            }
        }}
        >
            <Stack.Screen name="Home" options={{headerShown: false, title:'Inicio', animation:'fade_from_bottom'}} component={ScreenInicio} />
            <Stack.Screen name="Calcular" component={ScreenFormulario} />
        </Stack.Navigator>
    );
}