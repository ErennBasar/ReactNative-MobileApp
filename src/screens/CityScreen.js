import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CityScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('CityInformationScreen', {cityName:'Ankara'})}
              >
            <Text style={[styles.buttonText]}>Ankara</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('CityInformationScreen',{cityName:'Istanbul'})}
              >
            <Text style={[styles.buttonText]}>istanbul</Text>
      </TouchableOpacity>
      <TouchableOpacity 
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('CityInformationScreen',{cityName:'Efeler'})}
              >
            <Text style={[styles.buttonText]}>Aydın</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CityScreen

const styles = StyleSheet.create({})