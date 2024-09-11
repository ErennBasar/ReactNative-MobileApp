import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState } from 'react'
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';






const LoginScreen = ({navigation}) => {

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Giriş başarılı:', user.email);
                navigation.navigate('Drawer'); // Giriş başarılı olduğunda ana ekrana yönlendirme
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
            <LinearGradient
                colors={['blue', 'purple']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientBorder}
                >
                <TextInput 
                    placeholder='Username or e-mail' 
                    style={styles.textInputStyle} 
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail}
                    >
                </TextInput>
            </LinearGradient>
                
                <LinearGradient
                    colors={['blue', 'purple']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.gradientBorder}
                    >
                    <TextInput 
                        placeholder='Password' 
                        style={styles.textInputStyle} 
                        autoCapitalize='none'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        >
                    </TextInput>
                </LinearGradient>


            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleLogin}
                    >
                   <MaskedView
                        maskElement={
                            <View style={styles.maskedView}>
                                <Text style={styles.buttonText}>Login</Text> 
                            </View>
                        }
                    >
                        <LinearGradient
                            colors={['blue', 'purple']} // Geçişli renkler
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonGradient}
                        />
                    </MaskedView>
                </TouchableOpacity>
                    
                        
                <TouchableOpacity  
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate('SignUpScreen')}
                    >
                   <MaskedView
                        maskElement={
                            <Text style={styles.buttonText}>Sign Up</Text>
                        }
                    >
                        <LinearGradient
                            colors={['blue', 'purple']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonGradient}
                        />
                    </MaskedView>
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
        backgroundColor:'#ccc',
    },
    gradientBorder: {
        padding: 1,
        margin: 5,
        borderRadius: 15,
        flexDirection: 'column',
      },
    textInputStyle:{
        margin:3,
        padding:10,
        backgroundColor:'#ccc',
        width:200,
        borderRadius:15,
       
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '70%',
       
    },  
    buttonStyle: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 10, // Butonun yüksekliği ayarlandı
    },
    buttonGradient: {
        
        justifyContent: 'center',
        alignItems: 'center',
        height: 50, // Butonun yüksekliği ayar
        
    },
    maskedView: {
        justifyContent: 'center',
        alignItems: 'center',
      },
})