import { StyleSheet, Text, View,Platform,Button } from 'react-native'
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

    const userLocation = async() => {
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
  }
    useEffect(() => {
        userLocation();
    },[]);

    return (

      <View style={styles.container}>
        <MapView style={styles.map} 
        region={mapRegion}
        >
           <Marker coordinate={mapRegion} title='Marker' />
        </MapView>
        <Button title="Get User Location" onPress={userLocation} />
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
})
    