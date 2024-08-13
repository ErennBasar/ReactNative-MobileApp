import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useReducer} from 'react'


const reducer = (state,action) => {
  

    switch (action.type) {
        case 'increment':
            return {...state,count: state.count + action.payload}
        case 'decrement':
            return {...state,count: state.count - action.payload}
        case 'reset':
          return {...state,count: 0}
        default:
            return state;
    }
    
}
//state === {count: 0}

//action === {type: 'increment' || 'decrement', payload: 1}

const CounterScreen = () => {

   

   // const [counter,setCounter] = useState(0);
    const [state,dispatch] = useReducer(reducer,{count:0});

  return (
    <View>
      <Text style={{fontSize:50}} >CounterScreen</Text>
       <Text>Count: {state.count} </Text>
      <Button title =  "Increment" onPress={()=>{
        
        dispatch({type:'increment',payload:1})
       // setCounter(counter + 1);
      }} >
      </Button>
      <Button title =  "Decrement" onPress={()=>{
         
         dispatch({type:'decrement',payload:1})
         //setCounter(counter - 1);
      }} >
      </Button>
      <Button title =  "Reset" onPress={()=>{

        dispatch({type:'reset'})
        //setCounter(0);
      }} >
      </Button>

        
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})