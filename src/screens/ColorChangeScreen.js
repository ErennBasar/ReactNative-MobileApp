import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useReducer } from 'react'
import ColorChange from '../../components/ColorChange'

const reducer = (state,action) => {
    
    switch (action.type) {
      case 'change_red':
           return state.red + action.payload>255 || 
           state.red + action.payload<0 ? state : {...state,red:state.red + action.payload}
      case 'change_green':
        return state.green + action.payload>255 || 
        state.green + action.payload<0 ? state : {...state,green:state.green + action.payload}
      case 'change_blue':
        return state.blue + action.payload>255 || 
        state.blue + action.payload<0 ? state : {...state,blue:state.blue + action.payload}
      default:
           return state;
    }
}

const ColorChangeScreen = () => {

    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
  
    return (
        <View>
            <Text>ColorChangeScreen</Text>
           <ColorChange color='red' 
           onIncrease={()=>{
                dispatch({type:'change_red',payload:20})
           }}
           onDecrease={()=>{
                dispatch({type:'change_red',payload:-20})
           }}
        
           ></ColorChange>

           <ColorChange color='green' 
            onIncrease={()=>{
                dispatch({type:'change_green',payload:20})
           }}
           onDecrease={()=>{
                dispatch({type:'change_green',payload:-20})
           }}></ColorChange>

           <ColorChange color='blue' 
            onIncrease={()=>{
                dispatch({type:'change_blue',payload:20})
           }}
           onDecrease={()=>{
                dispatch({type:'change_blue',payload:-20})
           }}></ColorChange>
           <View
            style={{
                height:100,
                width:100,
                backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
            }}
            ></View>
            <Text>{`rgb(${state.red},${state.green},${state.blue})`}</Text>
      
            
            
        </View>
    )
}

export default ColorChangeScreen


const styles = StyleSheet.create({})