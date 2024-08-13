import { StyleSheet, Text, View,Platform,Button,Alert } from 'react-native'
import React, {useState, useEffect}from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';



const LocationScreen = () => {

    const [mapRegion,setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [city, setCity] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    

    const userLocation = async() => {
        try {
            let{status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg('Permission to access location was denied');
                
            }
            let location = await Location.getCurrentPositionAsync({});
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
            console.log(location.coords.latitude,location.coords.longitude);

            // Ters geokodlama işlemi
            let reverseGeocode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });

            if (reverseGeocode.length > 0) {
                setCity(reverseGeocode[0].city);
                console.log("City: ", reverseGeocode[0].city);
            }

        } catch (error) {
            console.error("Error getting location: ", error);
            Alert.alert("Error", "Failed to get your location. Please try again.");

        };
    }
    
    useEffect(() => {
        userLocation();
    },[]);

    return (

      <View style={styles.container}>
        <MapView style={styles.map} 
        region={mapRegion}
        >
           <Marker coordinate={mapRegion} title={city ? `City: ${city}` : 'Your Location'} />
        </MapView>
        <Button title="Get User Location" onPress={userLocation} />
        {city ? <Text>City: {city}</Text> : null}
        {errorMsg ? <Text>{errorMsg}</Text> : null}
      </View>
    );
};

export default LocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      map: {
        width: '100%',
        height: '90%',
        
      },
});