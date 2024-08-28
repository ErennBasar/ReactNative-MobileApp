import { StyleSheet, Text, View,TextInput ,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import MapView, { Marker } from 'react-native-maps';

const PlaceInfoScreen = ({route,navigation}) => {

  const cities = {
    Akbük: { latitude: 37.3816763299998, longitude: 27.43179188262064 },
    Altınkum: { latitude: 37.35564908922434, longitude: 27.27847748411288 },
    DilekYarımadası: { latitude: 37.68985339089244,longitude: 27.12904307139409 },
    Taksim:{latitude:41.03696381523486, longitude:28.985113687714968},
    kızkulesi:{latitude:41.02125621515302,longitude:29.004081145715087},
    Ayasofya:{latitude:41.008679866018085,longitude: 28.980101749993015},
    Topkapı:{latitude:41.01157687517068,longitude:28.983359271870203},
    Sultanahmet:{latitude:41.00547026134658,longitude:28.976803894941607}
  };

  const {place} = route.params || {} ;
  const city = cities[place];

  if (!city) { // Eğer şehir bilgisi yoksa hata mesajı göster
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Hata: Geçersiz bir şehir seçildi.</Text>
      </View>
    );
  }

   return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: city.latitude,
          longitude: city.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: city.latitude, longitude: city.longitude }}
          title={place}
        />
      </MapView>
      <Text style={{ padding: 16, fontSize: 18 }}>
        {place} Konumu
      </Text>
      <Text style={styles.title}>{place} Info Screen</Text>
      {place == 'Akbük' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'Altınkum' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'DilekYarımadası' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'Taksim' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'kızkulesi' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'Ayasofya' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'Topkapı' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
      {place == 'Sultanahmet' &&
        <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('ImageScreen',{placeName:place} )}
          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>navigation.navigate('CommentScreen',{cityName:place} )}
          >
            <Text> {place} Comments</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

export default PlaceInfoScreen

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#ccc', 
    padding:10, 
    margin:10,
    alignItems:'center',
    borderWidth:2,
    borderColor:'#f53b57',
    borderRadius:10,
  },
  title:{
    fontSize:25,
    textAlign:'center',
    fontStyle:'bold',
  },
})

