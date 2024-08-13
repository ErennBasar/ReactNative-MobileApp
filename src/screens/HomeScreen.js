import { StyleSheet, Text,View, TouchableOpacity ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
        
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
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
              
              style={[styles.button, {backgroundColor:'#ccc'}]} 
              onPress={() => navigation.navigate('LocationScreen')}
              >
            <Text style={[styles.buttonText,{color:'black'}]}>Location Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              
              style={[styles.button, {backgroundColor:'#fff'}]} 
              onPress={() => navigation.navigate('TravelApp')}
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
    backgroundColor:'rgb(40,40,40)',
    borderWidth:1,
    borderColor:'#FF8343',
    borderStyle:'solid',
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
    color:'#F2EFE5',
    fontSize:35,
    marginBottom:80,
    borderWidth:2,
    borderColor:'#BBE9FF',
    borderRadius:10,
    padding:10,
    borderStyle:'dotted',
  }
  });