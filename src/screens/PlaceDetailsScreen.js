import { StyleSheet, Text, View ,Button,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import PlaceDetails from '../../components/PlaceDetails';

const PlaceDetailsScreen = ({route,navigation}) => {

    const { placeName, placeInfo } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{placeName}</Text>
      <Text style={styles.info}>{placeInfo}</Text>
      { placeName === 'Didim' && 
      <ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Altınkum'})}>
          <PlaceDetails 
          title='Altınkum'
          imageSource={require('../../assets/PlacesImages/didim-altınkum.jpeg')} 
          desc='Altınkum, Didim ilçesine bağlı bir mahalledir.' 
          
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Akbük'})}>
          <PlaceDetails 
          title='Akbük'
          imageSource={require('../../assets/PlacesImages/didim-altınkum.jpeg')} 
          desc='Akbük Didim ilçesine bağlı bir mahalledir.' 
          
          />
        </TouchableOpacity>

          <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', {cityName: placeName})} />
      </ScrollView>
      }
      { placeName === 'Kuşadası' && 
      <ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'DilekYarımadası'})}>
          <PlaceDetails 
          title='Dilek Yarımadası'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Kuşadası ilçesine bağlı bir milli parktır.' 
          
          />
        </TouchableOpacity>

          <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', {cityName: placeName})} />
      </ScrollView>
      }
      { placeName === 'Taksim' && 
      <ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Taksim'})}>
          <PlaceDetails 
          title='Taksim Meydanı'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Taksim Meydanı, İstanbul iline bağlı bir meydandır.' 
          
          />
        </TouchableOpacity>

          <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', {cityName: placeName})} />
      </ScrollView>
      }
      { placeName === 'Üsküdar' && 
      <ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'kızkulesi'})}>
          <PlaceDetails 
          title='Kız Kulesi'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Kız Kulesi, Üsküdar ilçesine bağlı bir kuledir.' 
          
          />
        </TouchableOpacity>

          <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', {cityName: placeName})} />
      </ScrollView>
      }
      { placeName === 'Fatih' && 
      <ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Ayasofya'})}>
          <PlaceDetails 
          title='Ayasofya'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Ayasofya Müzesi, Fatih ilçesine bağlı bir müzedir.' 
          
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Topkapı'})}>
          <PlaceDetails 
          title='Topkapı Sarayı'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Topkapı Sarayı, Fatih ilçesine bağlı bir saraydır.' 
          
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Sultanahmet'})}>
          <PlaceDetails 
          title='Sultanahmet Cami'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Sultanahmet Camii, Fatih ilçesine bağlı bir camidir.' 
          
          />
        </TouchableOpacity>

          <Button title="Konum Onayla" onPress={() => navigation.navigate('LocationVerificationScreen', {cityName: placeName})} />
      </ScrollView>
      }
      
       
    </ScrollView>
  )
}

export default PlaceDetailsScreen

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontStyle:'bold',
    textAlign:'center',
  },
  info:{
    fontSize:20,
    fontStyle:'arial',
    textAlign:'center',
  },
  
})