import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

const CoursesInformation = () => {
  return (
    <View>
      <Information title="Angular"/>
      <Information />
      <Information />
    </View>
  )
}

export default CoursesInformation

const styles = StyleSheet.create({})