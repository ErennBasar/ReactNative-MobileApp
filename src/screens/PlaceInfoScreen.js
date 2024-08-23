import { StyleSheet, Text, View,TextInput ,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const PlaceInfoScreen = ({route,navigation}) => {

  const {place} = route.params
;  return (
    <View>
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
      {place == 'Dilek Yarımadası' &&
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

