import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import * as Location from 'expo-location';
import { getDistance } from 'geolib';


const cityCoordinatesData = {
  Istanbul: { latitude: 41.0082, longitude: 28.9784 },
  Aydın: { latitude: 37.8218, longitude: 27.8378 },
  Didim: { latitude: 37.3875, longitude: 27.2577 },
  Kuşadası: { latitude: 37.8579, longitude: 27.2614 },
  Kadıköy: { latitude: 40.9916, longitude: 29.0277 },
  Eminönü: { latitude: 41.0096, longitude: 28.9774 },
  Beşiktaş: { latitude: 41.0422, longitude: 29.0071 },
  // Diğer şehirler ve koordinatlar
};


const LocationVerificationScreen = ({route}) => {

  const { cityName } = route.params;
  const [userLocation, setUserLocation] = useState(null);
  const [cityCoordinates, setCityCoordinates] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (cityName) {
      const coordinates = cityCoordinatesData[cityName];
      if (coordinates) {
        setCityCoordinates(coordinates);
      } else {
        alert('Şehir bulunamadı.');
      }
    }
  }, [cityName]);
  

  // Kullanıcı konumunu alma fonksiyonu
  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Konum izni verilmedi');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location.coords);
  };

  // Kullanıcı konumunu şehir koordinatları ile karşılaştırma fonksiyonu
  const verifyLocation = () => {
    if (!userLocation || !cityCoordinates) {
      alert('Bekleniyor...');
      console.log("Kullanıcı Konumu:", userLocation); // Debug için
      console.log("Şehir Koordinatları:", cityCoordinates); // Debug için
      return;
    }

  
    const distance = getDistance(userLocation, cityCoordinates);
    const isInCity = distance <= 10000; // 10 km içinde mi?

    if (isInCity) {
      alert('Kullanıcı seçilen şehirde.');
    } else {
      alert('Kullanıcı seçilen şehirde değil.');
      console.log("Kullanıcı Konumu:", userLocation); // Debug için
      console.log("Şehir Koordinatları:", cityCoordinates); // Debug için
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Şehir Adını Girin ve Konumu Doğrulayın:</Text>
      <Button title={`Konum Seç: ${cityName}`} onPress={() => verifyLocation()} />
      <Button title="Doğrula" onPress={verifyLocation} />
    </View>
  );
};

  
  export default LocationVerificationScreen;
  
  const styles = StyleSheet.create({});