import { ScrollView, StyleSheet, Text, View,TextInput,FlatList,Button,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'

const TravelAppHomeScreen = ({navigation}) => {
    const [cities,setCities] = useState([]);
    const [newCity, setNewCity] = useState('');

    const addCity = () => {
        
        if(newCity.trim()){ // If new city name is not empty
            setCities([...cities,newCity]); // Add new city name to cities array
            setNewCity(''); // Clear the input
    }
}
    return (
        <KeyboardAvoidingView style={styles.viewContainer}>
            <View style={styles.inputRow}>
                <View style={styles.inputText}>
                        <TextInput 
                        placeholder="Enter City Name" 
                        value={newCity}
                        onChangeText={setNewCity} // Set new city name
                        />
                </View>
                <View style={styles.addCityBtn}>
                    <Button 
                    title="Add City" 
                    onPress={addCity}
                    />
                </View>
             </View>
            <FlatList
                data={cities}
                renderItem={({item})=>{
                    return(
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity 
                                style={[styles.button]} 
                                onPress={() => navigation.navigate('CityScreen',{city:item})}
                                >
                                <Text style={[styles.buttonText]}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={(_item, index) => index.toString()} // Uniqe key for each item
            />
        </KeyboardAvoidingView>
      )
}

export default TravelAppHomeScreen

const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:'space-between',
        width:'100%',
    },
    button:{
        padding:10,
        margin:10,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#ccc',
        borderWidth:1,
        borderColor:'#FF8343',
        
    },  
    buttonText:{
        marginTop:5,
        padding:5,
        fontSize:25,
        
    },
    viewContainer:{
        flex:1,
        backgroundColor:'#ccc',
    },
    inputText:{
        borderWidth:1,
        borderColor:'#4158A6',
        padding:10,
        
        
        borderRadius:15,
        marginVertical:40,
        marginRight:80,
        width:200,
    },
    addCityBtn:{
        justifyContent:'center',
        alignItems:'center',
        width:90,
        
        
       
    },
    inputRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        
    }
})