import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Courses"
          onPress={() => navigation.navigate('Courses')}
        />
        <Button 
          title="Go to Courses Information"
          onPress={() => navigation.navigate('Course Informations')}
        />
         <Button 
          title="Go to Counter Screen"
          onPress={() => navigation.navigate('Counter')}
        />
         <Button 
          title="Go to Box Screen"
          onPress={() => navigation.navigate('Boxes')}
        />
        <Button 
          title="Go to ColorChangeScreen"
          onPress={() => navigation.navigate('ColorChangeScreen')}
        />
      </View>
    );
  }