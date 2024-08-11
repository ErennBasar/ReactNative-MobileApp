import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'

const PasswordScreen = () => {

    const [password,setPassword] = useState('')

  return (
    <View style={styles.main} >
      <Text>Şifrenizi giriniz: </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize='none'
        value={password}
        onChangeText={(p)=>setPassword(p)}
      ></TextInput>
      {password.length < 6 ? <Text>Password must be longer than 6 characters</Text> : null}
    </View>
  )
}

export default PasswordScreen

const styles = StyleSheet.create({
    main:{
      
    },
    input:{
        borderWidth:2,
        borderColor:'black',
        padding:10,
        margin:10
    }
})