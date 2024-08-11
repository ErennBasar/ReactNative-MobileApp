import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="My Courses "
          onPress={() => navigation.navigate('Courses')}
        />
        <Button 
          title="Course Informations"
          onPress={() => navigation.navigate('Course Informations')}
        />
         <Button 
          title="Counter App"
          onPress={() => navigation.navigate('Counter')}
        />
         <Button 
          title="Box App"
          onPress={() => navigation.navigate('Boxes')}
        />
        <Button 
          title="Change Color"
          onPress={() => navigation.navigate('ColorChangeScreen')}
        />
        <Button 
          title="Go to Password Screen"
          onPress={() => navigation.navigate('PasswordScreen')}
        />
      </View>
    );
  }