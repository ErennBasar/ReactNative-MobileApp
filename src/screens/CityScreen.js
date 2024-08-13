import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CityScreen = ({route}) => {

    const {city} = route.params; // Get city name from route params
  return (
    <View style={styles.container}>
        <Text style={styles.cityText}>{city}</Text> 
    </View>
  )
}

export default CityScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cityText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})