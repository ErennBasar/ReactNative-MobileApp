import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

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
import PlaceInfoScreen from './src/screens/PlaceInfoScreen';
import ImageScreen from './src/screens/ImageScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  
  const navigation = useNavigation();
  
  return (
  <Drawer.Navigator >
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Boxes" component={BoxScreen}/>
      <Drawer.Screen name="ColorChangeScreen" component={ColorChangeScreen}/>
      <Drawer.Screen name="Counter" component={CounterScreen} />
      <Drawer.Screen name="Courses" component={CoursesScreen} />
      <Drawer.Screen name="Course Informations" component={CoursesInformationScreen} />
      <Drawer.Screen name="PasswordScreen" component={PasswordScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
      <Drawer.Screen name="LogOut">
          {() => {
            
            navigation.navigate('Login');
            return null; // Hiçbir şey render etmez çünkü logout sadece yönlendirme yapar.
          }}
      </Drawer.Screen>
  </Drawer.Navigator>
 )
}

function App() {
  return ( 
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="CityScreen" component={CityScreen} />
        <Stack.Screen name="CityInformationScreen" component={CityInformationScreen} />
        <Stack.Screen name="CityInformation" component={CityInformation} />
        <Stack.Screen name="LocationVerificationScreen" component={LocationVerificationScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="PlaceDetailsScreen" component={PlaceDetailsScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="PlaceInfoScreen" component={PlaceInfoScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator} 
          options={{
            title: 'Drawer Navigator',
            headerShown: false,
          }}
          />
        
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  
});
