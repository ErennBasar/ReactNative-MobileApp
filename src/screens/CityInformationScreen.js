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
          <View style={styles.buttonRow}>
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
      
      </View>
      <TouchableOpacity
            style={styles.commentButton}
            onPress={() => navigation.navigate('CommentScreen', {cityName:'Aydın'} )}
        >
          <Text>Yorumlar</Text>
        </TouchableOpacity>
        </View> 
          
      } 
      {cityName === 'Istanbul' && 
        <View>
          <Text>Istanbul, Türkiye'nin en kalabalık ve en turistik şehirlerinden biridir.</Text>
        <View style={styles.buttonRow}>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Taksim',
                        placeInfo: 'Taksim, İstanbul iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Taksim</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Üsküdar',
                        placeInfo: 'Üsküdar, İstanbul iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Üsküdar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('PlaceDetailsScreen', { 
                        placeName: 'Fatih',
                        placeInfo: 'Fatih, İstanbul iline bağlı bir ilçedir.'
                        })}
              >
            <Text style={styles.buttonText}>Fatih</Text>
      </TouchableOpacity>
      
        </View>
        <TouchableOpacity
            style={styles.commentButton}
            onPress={() => navigation.navigate('CommentScreen', {cityName:'İstanbul'} )}
        >
          <Text>Yorumlar</Text>
        </TouchableOpacity>
       </View>
      }
      <TouchableOpacity
            style={styles.locationButton}
            onPress={() => navigation.navigate('LocationVerificationScreen', {cityName})}
        >
          <Text>Konum</Text>
        </TouchableOpacity>
      
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
    marginVertical: 5,
    borderWidth:2,
    borderColor:'#624E88',
    padding: 10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    height:80,
    width:100,
  },
  commentButton: {
    backgroundColor: '#536493',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth:2,
    borderColor:'#4F1787',
  },
  locationButton: {
    backgroundColor: '#536493',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    borderWidth:2,
    borderColor:'#4F1787',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
