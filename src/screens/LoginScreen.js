import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect } from 'react'
import {auth} from '../../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';



const LoginScreen = ({navigation}) => {

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

     const handleSignUp = () => {
        
         auth.createUserWithEmailAndPassword(email,password).then(userCredentials => {

             const user = userCredentials.user;
            //console.log(auth);
             console.log('kullanıcı',user.email);
         })
         .catch((error) => alert(error.message));
     }
    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        // signInWithRedirect'i kullanarak Google ile oturum açma
        signInWithRedirect(auth, provider).then(() => {
            console.log('Oturum açıldı:', result.user);
        })
        .catch((error)=>{
            console.error("Google ile oturum açarken bir hata oluştu:", error);
        })
    }
    

  return (
    

        <KeyboardAvoidingView style={styles.container}>
            <Text>Welcome !</Text>
                <TextInput 
                    placeholder='Username or e-mail' 
                    style={styles.textInputStyle} 
                    value={email}
                    onChangeText={(e)=>{setEmail(e)}}
                    >
                </TextInput>
                <TextInput 
                    placeholder='Password' 
                    style={styles.textInputStyle} 
                    autoCapitalize='none'
                    value={password}
                    onChangeText={(p)=>{setPassword(p)}}
                    secureTextEntry
                    >
                 </TextInput>
                <View>
                    <Text style={styles.text} >
                        {password.length >= 6 ? null : 
                        <Text>Password must be longer than 6 characters</Text> }
                    </Text>
                </View>

              <View style={styles.buttonContainer}>
                 <TouchableOpacity  
                        style={[styles.button,{backgroundColor:'#4158A6'}]}
                        onPress={handleSignUp}
                        >
                    <Text>Sign Up</Text>   
              </TouchableOpacity> 
                <TouchableOpacity   
                        style={[styles.button, {backgroundColor:'#FF8400'}]}
                        onPress={()=>navigation.navigate('Home')}
                        >
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity   
                        style={[styles.button, {backgroundColor:'#0F9D58'}]}
                        onPress={handleSignInWithGoogle}
                >
                    <Text>Sign in with Google</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    
  );
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ccc'
    },
    textInputStyle:{
        borderWidth:1,
        borderColor:'#FF8343',
        padding:10,
        margin:10,
        width:200,
        borderRadius:15,
    },
    button:{
        justifyContent:'center',
        width:80,
        height:35,
        borderRadius:10,
        alignItems:'center',
        marginHorizontal:15,
    },
    buttonContainer:{
        flexDirection:'row',
    },  
   
    text:{
        marginBottom:25,
    }
})
       
    