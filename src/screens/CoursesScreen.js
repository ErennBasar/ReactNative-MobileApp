import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesScreen() {

        const courses = [
            { id: 1, name: 'React',
              description: 'A JavaScript library for building user interfaces' },
            { id: 2, name: 'Angular',
              description: 'A platform that makes it easy to build applications' },
            { id: 3, name: 'React Native',
              description: 'A framework for building native apps using React'
              }
        ];
    return (
      <FlatList
        data={courses}
        keyExtractor={(item=>item.id)}
        renderItem={({item})=>(
            <View style={styles.container} >
                <Text style={styles.titleStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>{item.description}</Text>
            </View>
        )}
      ></FlatList>

        
      );
    }
    


const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        marginVertical:5,
        
    },
    textStyle:{
        fontSize:20,
        backgroundColor:'#ccc'
    },
    titleStyle:{
      fontSize:30,
      backgroundColor:'lightblue'
    }
})