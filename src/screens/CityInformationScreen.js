import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';


const CityInformationScreen = ({ route,navigation }) => {
  const { cityName } = route.params;
  

  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{cityName} hakkında bilgi:</Text>
      {cityName === 'Ankara' && <Text>Başkent olan Ankara, Türkiye'nin en büyük ikinci şehridir.</Text>}
      {cityName === 'Aydın'&& 
        <View>
          <Text>Aydın, Türkiye'nin Ege Bölgesi'nde yer alan bir şehirdir.</Text>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                          placeName: 'Didim', 
                          placeInfo: 'Didim, Aydın iline bağlı bir ilçedir.' 
                          })}
              >
            <Text style={styles.buttonText}>Didim</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Kuşadası',
                        placeInfo: 'Kuşadası, Aydın iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Kuşadası</Text>
      </TouchableOpacity>
      <Button title="Yorumlar" onPress={() => navigation.navigate('CommentScreen', {cityName:'Aydın'} )} />
        </View> 
          
      } 
      {cityName === 'Istanbul' && 
       <View>
          <Text>Istanbul, Türkiye'nin en kalabalık ve en turistik şehirlerinden biridir.</Text>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Eminönü',
                        placeInfo: 'Eminönü, İstanbul iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Eminönü</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Beşiktaş',
                        placeInfo: 'Beşiktaş, İstanbul iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Beşiktaş</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Kadıköy',
                        placeInfo: 'Kadıköy, İstanbul iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Kadıköy</Text>
      </TouchableOpacity>
      <Button title="Yorumlar" onPress={() => navigation.navigate('CommentScreen', {cityName:'İstanbul'} )} />
       </View>
      }
        

      <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', {cityName})} />

      
    </View>
  );
};

export default CityInformationScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ccc',
    flex: 1,
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  locationText: {
    fontSize: 16,
    marginTop: 20,
  },
  checkboxContainer: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#FF8343',
    marginVertical: 1,
    borderWidth:2,
    borderColor:'#FF8343',
    marginVertical:2,
    padding:4,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
});
