import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React, { useState,useEffect  } from 'react';
import LocationScreen from './LocationScreen';

const LocationVerificationScreen = ({ route, navigation }) => {
    const { cityName,onVerify  } = route.params;
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);
    const [isLocationVerified, setIsLocationVerified] = useState(false);
    
  
    const handleLocationUpdate = (location) => {
      setLocation(location);
    };
  
    const handleCityUpdate = (city) => {
      setCity(city);
      if (location && city) {
        verifyLocation(location, city);
      }
    };
  
    const verifyLocation = (location, city) => {
      if (city && city.toLowerCase() === cityName.toLowerCase()) {
        setIsLocationVerified(true);
        Alert.alert('Konum Doğrulandı', `Konumunuz ${city} ile eşleşiyor.`);
        if (onVerify){
          onVerify(true);  // Checkbox'ı işaretle
        }
        navigation.goBack();
      } else {
        setIsLocationVerified(false);
        Alert.alert('Konum Doğrulanamadı', `Konumunuz ${city} ile eşleşmiyor.`);
        if (onVerify) {
          onVerify(false); // Checkbox'ı kaldır
        }
      }
      
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Konum Doğrulama</Text>
        <LocationScreen onLocationUpdate={handleLocationUpdate} onCityUpdate={handleCityUpdate} />
        {location && <Text style={styles.locationText}>Mevcut Konum: {location.latitude}, {location.longitude}</Text>}
        {city && <Text style={styles.cityText}>Bulunduğunuz şehir: {city}</Text>}

        {isLocationVerified && (
        <Button
          title="Doğrulandı"
          onPress={() => Alert.alert('Doğrulandı', 'Konumunuz başarıyla doğrulandı.')}
          color="green"
        />
      )}
        
        <Button title="Geri Dön" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  
  export default LocationVerificationScreen;
  
  const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    locationText: {
      fontSize: 16,
      marginTop: 20,
    },
    cityText: {
      fontSize: 16,
      marginTop: 10,
    },
    verificationText: {
      fontSize: 18,
      color: 'green',
      marginTop: 20,
    },
  });