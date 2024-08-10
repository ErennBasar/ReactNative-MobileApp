import { StyleSheet, Text, View ,Button,FlatList, ScrollView} from 'react-native'
import React,{useReducer} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const reducer = (state,action) => {

  switch (action.type) {
      case 'add':
          return [...state,action.payload]
      default:
          return state;
  }
}



const BoxScreen = () => {


    const [state,dispatch]  = useReducer(reducer,[]);
    //const [colors,setColors] = useState([]);

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
       
       dispatch({type:'add',payload:randomColor()})
       //setColors([...colors,randomColor()]);
      }} 
      ></Button>
      <FlatList
      data={state}
        renderItem={({item})=>{
           return(
              <ScrollView
               style={{
                   height:100,
                   width:100,
                   backgroundColor:item,
                   marginVertical:10
                }}
              ></ScrollView>
            ) 
        }}
      ></FlatList>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({})