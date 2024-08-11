import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Welcome !</Text>
        <TextInput placeholder='Username' style={styles.textInputStyle} ></TextInput>
        <TextInput placeholder='Password' style={styles.textInputStyle} ></TextInput>
      <View style={styles.button}>
        <Button  title='Sign Up' ></Button>
        <Button  title='Login' onPress={()=>navigation.navigate('Home')}></Button>
      </View> 
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInputStyle:{
        borderWidth:1,
        borderColor:'black',
        padding:10,
        margin:10,
        width:200
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:220,
        paddingHorizontal:10
    }
       
    
})