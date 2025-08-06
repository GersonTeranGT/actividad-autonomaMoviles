import { createStackNavigator } from '@react-navigation/stack';
import { ScreenHome } from '../screens/ScreenHome';
import { ScreenForm } from '../screens/ScreenForm';
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
            <Stack.Screen name="Home" options={{headerShown: false, title:'Inicio', animation:'fade_from_bottom'}} component={ScreenHome} />
            <Stack.Screen name="Calcular" component={ScreenForm} />
        </Stack.Navigator>
    );
}