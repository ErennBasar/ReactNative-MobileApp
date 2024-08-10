import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useReducer } from 'react'



const ColorChange = ({color,onIncrease,onDecrease}) => {

    

  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} increase `} onPress={onIncrease}></Button>
      <Button title={`${color} decrease `} onPress={onDecrease}></Button>
    </View>
  )
}
    
export default ColorChange

const styles = StyleSheet.create({})