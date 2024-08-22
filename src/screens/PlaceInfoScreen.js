import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceInfoScreen = ({route}) => {

    const { place } = route.params;
  return (
    <View>
      <Text>PlaceInfoScreen</Text>
        <Text>{place}</Text>
    </View>
  )
}

export default PlaceInfoScreen

const styles = StyleSheet.create({})