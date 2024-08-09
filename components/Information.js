import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Information = ({title,desc,imageSource}) => {
  return (
    <View style={styles.container} >
      <Image style={styles.img} source={imageSource} ></Image>
           <View style={styles.textContainer} > 
              <Text style={styles.title} >{title}</Text>
              <Text style={styles.desc} >{desc}</Text>
          </View>
      
    </View>
  )
}


export default Information

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    backgroundColor:'#ccc',
  },
  img:{
    width:100,
    height:100,
    marginRight:10,
    },
  textContainer:{
    flex:1,
    
  },
  title:{
    fontSize:30,
    
  },
  desc:{
    fontSize:20,
    
  },
  view:{
    flex:1,
    justifyContent:'center',
    marginVertical:5,
  }
})