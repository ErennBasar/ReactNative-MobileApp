import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CityScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('CityInformationScreen', {cityName:'Ankara'})}
              >
            <Text style={styles.buttonText}>Ankara</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('CityInformationScreen',{cityName:'Istanbul'})}
              >
            <Text style={styles.buttonText}>istanbul</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('CityInformationScreen',{cityName:'Aydın'})}
              >
            <Text style={styles.buttonText}>Aydın</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CityScreen

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  button:{
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
})