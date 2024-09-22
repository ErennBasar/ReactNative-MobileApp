import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = () => {

    const user = auth.currentUser;
    const fullName = user?.displayName || '';
    

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <TouchableOpacity
          style={styles.profilePicture}
        >
          <Text style={styles.profilePictureText}>P</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer} >
        <Text>{fullName}</Text>
      </View>
    </View>

      
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ccc',
    marginTop:10,
  },
  textContainer:{
    marginTop:10,
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor:'black',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopWidth: 1,
    borderTopColor:'black',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    
  },
  profilePictureContainer:{
    alignItems:'center',
    padding:40,
    marginHorizontal:'auto',
    borderWidth:1,
    borderRadius:80,
    backgroundColor:'coral',
  },
  profilePicture:{
    width:40,
    justifyContent:'center',
    alignItems:'center',
  },
  profilePictureText:{
    fontStyle:'italic',
    fontSize:30,
  },
})