import Geolocation from 'react-native-geolocation-service';
import { Alert } from 'react-native';

export const getCurrentLocation = (onSuccess, onError) => {
  Geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      onSuccess(latitude, longitude);
    },
    (error) => {
      onError(error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};

export const validateLocation = (lat1, lon1, lat2, lon2, threshold = 0.1) => {
  return Math.abs(lat1 - lat2) < threshold && Math.abs(lon1 - lon2) < threshold;
};

export const checkLocation = (cityName, latitude, longitude) => {
  let isLocationValid = false;

  if (cityName === 'Ankara') {
    isLocationValid = validateLocation(latitude, longitude, 39.9334, 32.8597);
  } else if (cityName === 'Istanbul') {
    isLocationValid = validateLocation(latitude, longitude, 41.0082, 28.9784);
  }

  if (isLocationValid) {
    Alert.alert('Başarılı', `${cityName} konumundasınız.`);
  } else {
    Alert.alert('Hata', `${cityName} konumunda değilsiniz.`);
  }
};
