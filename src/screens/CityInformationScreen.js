import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

import LocationScreen from './LocationScreen';

const CityInformationScreen = ({ route,navigation }) => {
  const { cityName } = route.params;
  const [isLocationVerified, setIsLocationVerified] = useState(false);

  const handleVerification = (verified) => {
    setIsLocationVerified(verified);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{cityName} hakkında bilgi:</Text>
      {cityName === 'Ankara' && <Text>Başkent olan Ankara, Türkiye'nin en büyük ikinci şehridir.</Text>}
      {cityName === 'Istanbul' && <Text>Istanbul, Türkiye'nin en kalabalık ve en turistik şehirlerinden biridir.</Text>}

      <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', { cityName, onVerify: handleVerification })} />

      <LocationScreen />
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isLocationVerified}
          disabled={true} // Checkbox'ı devre dışı bırak, kullanıcı tıklayamaz 
        />
         <Text>Konum Onaylandı</Text>
      </View>
    </View>
  );
};

export default CityInformationScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  locationText: {
    fontSize: 16,
    marginTop: 20,
    flexDirection: 'row',
  },
  checkboxContainer: {
    marginTop: 20,
    alignSelf: 'stretch',
    
    
  },
});
