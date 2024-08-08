import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Courses')}
        />
        <Button
          title="Go to Courses Information"
          onPress={() => navigation.navigate('Informations')}
        />
      </View>
    );
  }