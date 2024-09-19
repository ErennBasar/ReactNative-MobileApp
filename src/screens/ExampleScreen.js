import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const ExampleScreen = () => {

    const [inputText,setInputText] = useState('');
    const [goals,setGoals] = useState([]);

    const goalInputHandler = (inputText) =>{
      
      setInputText(inputText); 
    }
    const addGoalHandler = () => {

        setGoals([...goals, inputText]);
    }

  return (
    <View style={styles.appContainer} >
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                placeholder="Type something"
                onChangeText={goalInputHandler}
            >
            </TextInput>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={addGoalHandler}
                
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.goalsContainer} >
            {goals.map((goal) => <Text key={goal}> {goal}</Text>)}
        </View>
    </View>
  )
}

export default ExampleScreen

const styles = StyleSheet.create({
    appContainer:{
        padding: 10,
        flex: 1,
        backgroundColor: '#ccc',
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    goalsContainer:{
        margin: 10,
    },
    inputText:{
        width: '70%',
        borderWidth: 1,
        marginRight: 1,
        margin:10,
        padding:10,
    },
    submitButton:{
        backgroundColor: 'coral',
        padding: 10,
        margin: 15,
        height: 40,
    }
})