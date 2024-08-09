import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

const CoursesInformation = () => {
  return (
    <ScrollView>
      <Information 
        title="Angular"
        imageSource={require('../../assets/angular.jpg')}
        desc="Angular Eğitimi" 
      />
        <Information 
        title="Bootstrap"
        imageSource={require('../../assets/bootstrap5.png')}
        desc="Bootstrap Eğitimi" 
      />
        <Information 
        title="C"
        imageSource={require('../../assets/c.png')}
        desc="C Eğitimi" 
      />
    </ScrollView>
  )
}

export default CoursesInformation

const styles = StyleSheet.create({}) 