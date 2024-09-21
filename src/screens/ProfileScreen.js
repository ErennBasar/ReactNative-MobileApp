import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase';

const ProfileScreen = () => {

    const user = auth.currentUser;
    const fullName = user?.displayName || '';
    

  return (
    <View>
      <Text>{fullName}</Text>
      
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})