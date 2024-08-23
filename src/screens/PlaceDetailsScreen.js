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

        <TouchableOpacity onPress={() => navigation.navigate('PlaceInfoScreen', {place:'Dilek Yarımadası'})}>
          <PlaceDetails 
          title='Dilek Yarımadası'
          imageSource={require('../../assets/PlacesImages/dilek_yarımadası.jpg')} 
          desc='Kuşadası ilçesine bağlı bir milli parktır.' 
          
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