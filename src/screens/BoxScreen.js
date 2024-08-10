import { StyleSheet, Text, View ,Button,FlatList} from 'react-native'
import React,{useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BoxScreen = () => {

    const [colors,setColors] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }

  return (
    <View>
      <Text>BoxScreen</Text>
      <Button title="Add Box" onPress={()=>{
        setColors([...colors,randomColor()]);
      }} 
      ></Button>
      <FlatList
      data={colors}
        renderItem={({item})=>{
           return(
              <View
               style={{
                   height:100,
                   width:100,
                   backgroundColor:item,
                   marginVertical:10
                }}
              ></View>
            ) 
        }}
      ></FlatList>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({})