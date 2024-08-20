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
                style={[styles.button, {backgroundColor:'#FEAE6F'}]} 
                onPress={() => navigation.navigate('Courses')}
                >
              <Text style={[styles.buttonText,{color:'black'}]}>My Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
                style={[styles.button, {backgroundColor:'#8E7AB5'}]} 
                onPress={() => navigation.navigate('Course Informations')}
                >
              <Text style={[styles.buttonText,{color:'black'}]}>Course Informations</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
                style={[styles.button, {backgroundColor:'#F6DCAC'}]} 
                onPress={() => navigation.navigate('Counter')}
                >
              <Text style={[styles.buttonText,{color:'black'}]}>Counter App</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
                style={[styles.button, {backgroundColor:'#E493B3'}]} 
                onPress={() => navigation.navigate('Boxes')}
                >
              <Text style={[styles.buttonText,{color:'black'}]}>Box App</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
                style={[styles.button, {backgroundColor:'#9AC8CD'}]} 
                onPress={() => navigation.navigate('ColorChangeScreen')}
                >
              <Text style={[styles.buttonText,{color:'black'}]}>Change Color</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
              style={[styles.button, {backgroundColor:'#EEA5A6'}]} 
              onPress={() => navigation.navigate('PasswordScreen')}
              >
            <Text style={[styles.buttonText,{color:'black'}]}>Password Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
              style={[styles.button, {backgroundColor:'#F9EBEA'}]} 
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  button:{
    flexBasis: '47%',
    padding: 15,
    marginVertical: 3,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
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