import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import LoginScreen from './src/screens/LoginScreen';
import LocationScreen from './src/screens/LocationScreen';
import CityScreen from './src/screens/CityScreen';
import CityInformationScreen from './src/screens/CityInformationScreen';
import CityInformation from '../my-app/components/CityInformation';
import LocationVerificationScreen from './src/screens/LocationVerificationScreen';
import CommentScreen from './src/screens/CommentScreen';
import PlaceDetailsScreen from './src/screens/PlaceDetailsScreen';
import SignUpScreen from './src/screens/SignUpScreen';



const Stack = createNativeStackNavigator();

function App() {
  return ( 
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Course Informations" component={CoursesInformationScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Boxes" component={BoxScreen} />
        <Stack.Screen name="ColorChangeScreen" component={ColorChangeScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="CityScreen" component={CityScreen} />
        <Stack.Screen name="CityInformationScreen" component={CityInformationScreen} />
        <Stack.Screen name="CityInformation" component={CityInformation} />
        <Stack.Screen name="LocationVerificationScreen" component={LocationVerificationScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="PlaceDetailsScreen" component={PlaceDetailsScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({
  
});
