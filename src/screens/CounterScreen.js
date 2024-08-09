import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useState} from 'react'

const CounterScreen = () => {

    const [counter,setCounter] = useState(0);

  return (
    <View>
      <Text style={{fontSize:50}} >CounterScreen</Text>
        <Text style={{fontSize:30}} >Counter: {counter}</Text>

      <Button title =  "Increment" onPress={()=>{
        setCounter(c => c + 1);
        setCounter(c => c + 1);
        
      }} >
      </Button>
      <Button title =  "Decrement" onPress={()=>{
        setCounter(counter - 1);
      }} >
      </Button>
      <Button title =  "Reset" onPress={()=>{
        setCounter(0);
      }} >
      </Button>

        
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})