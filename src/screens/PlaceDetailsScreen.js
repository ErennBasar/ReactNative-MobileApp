import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceDetailsScreen = ({route}) => {

    const { placeName, placeInfo } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{placeName}</Text>
      <Text style={styles.info}>{placeInfo}</Text>
    </View>
  )
}

export default PlaceDetailsScreen

const styles = StyleSheet.create({})