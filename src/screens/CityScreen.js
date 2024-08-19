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
    flex: 1,
    backgroundColor:'#ccc', 
    
  },
  buttonText:{
    borderWidth:2,
    borderColor:'#FF8343',
    marginVertical:10,
    padding:10,
    borderRadius:15,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#FF8343',
    marginVertical: 1,
  },
})