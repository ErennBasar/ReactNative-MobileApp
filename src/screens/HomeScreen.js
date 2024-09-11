import { StyleSheet, Text,View, TouchableOpacity ,Button} from 'react-native'
import React from 'react'
import { auth } from '../../firebase';

export default function HomeScreen({ navigation }) {

  const user = auth.currentUser;

  // Kullanıcı bilgilerini al
  const fullName = user?.displayName || ''; // Kullanıcının tam adı
  const gender = user?.photoURL || ''; // Cinsiyet bilgisi

  // Kullanıcı adı ve cinsiyet bilgilerine göre hoşgeldiniz mesajı oluştur
  const welcomeMessage = () => {
    if (fullName) {
        const [firstName] = fullName.split(' '); // İlk isim
        if (gender === 'Male') {
            return `Hoşgeldiniz ${firstName} Bey!`;
        } else if (gender === 'Female') {
            return `Hoşgeldiniz ${firstName} Hanım!`;
        }
    }
    return 'Hoşgeldiniz!';
};

    return (
        
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
      <Text>{welcomeMessage()}</Text>
        <View style={styles.buttonContainer}>
              
          <TouchableOpacity 
              
              style={[styles.button, {backgroundColor:'#fff'}]} 
              onPress={() => navigation.navigate('LocationScreen')}
              >
            <Text style={[styles.buttonText,{color:'black'}]}>Location Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
              style={[styles.button, {backgroundColor:'#fff'}]} 
              onPress={() => navigation.navigate('CityScreen')}
              >
            <Text style={[styles.buttonText,{color:'black'}]}>Travel App</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor:'#ccc',
  },
  buttonContainer:{
    
    
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '%100',
    
    paddingHorizontal: 10,
  },
  button:{
    
    padding: 15,
    marginVertical: 3,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'purple',
  
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
  },
  header:{
    bottom:30, //header'ı yukarıya kaydırmak için
    fontSize:35,
    marginBottom:80,
    borderColor:'#BBE9FF',
    padding:10,
  }
  });