import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect } from 'react'
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



const LoginScreen = ({navigation}) => {

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Giriş başarılı:', user.email);
                navigation.navigate('Home'); // Giriş başarılı olduğunda ana ekrana yönlendirme
            })
            .catch(error => {
                // Giriş başarısız olursa hata mesajını göster
                Alert.alert("Giriş Hatası", "E-posta veya şifre hatalı.");
                console.error("Giriş sırasında bir hata oluştu:", error);
            });
    };
    

  return (
    

        <KeyboardAvoidingView style={styles.container}>
            <Text>Welcome !</Text>
                <TextInput 
                    placeholder='Username or e-mail' 
                    style={styles.textInputStyle} 
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail}
                    >
                </TextInput>
                <TextInput 
                    placeholder='Password' 
                    style={styles.textInputStyle} 
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    >
                 </TextInput>
                 <TouchableOpacity
                style={[styles.button, { backgroundColor: '#FF8400' }]}
                onPress={handleLogin}
               >
                <Text>Login</Text>
                </TouchableOpacity>
              <View style={styles.buttonContainer}>
                 <TouchableOpacity  
                        style={[styles.button,{backgroundColor:'#4158A6'}]}
                        onPress={()=>navigation.navigate('SignUpScreen')}
                        >
                    <Text>Sign Up</Text>   
              </TouchableOpacity> 
                
                <TouchableOpacity   
                        style={[styles.button, {backgroundColor:'#0F9D58'}]}
                        
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
       
    