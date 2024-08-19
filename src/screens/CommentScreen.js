import { StyleSheet, Text, View ,TextInput,Button,FlatList, KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React,{useState} from 'react'

const CommentScreen = () => {

const [inputText, setInputText] = useState('');
const[comment,setComment] = useState([])

const addComment = () => {
  if (inputText.trim() !== ''){  
    setComment([...comment,inputText]);
    setInputText('');
  }
}
const renderComment = ({ item }) => (
  <View style={styles.commentContainer}>
    <Text>{item}</Text>
  </View>
);

  return (



    <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS'te klavye çıktığında kaydırma yapar
        keyboardVerticalOffset={100}
    >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={styles.inner}>
            <FlatList
            data={comment}
            renderItem={renderComment}   
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.commentList}
            />
          <View style={styles.inputContainer}>
             <TextInput
             style={styles.input}
             placeholder='Yorumunuzu yazınız'
             value={inputText}
             onChangeText={(text) => setInputText(text)}
             >
             </TextInput>
             <Button title='Yorum Ekle' onPress={addComment}></Button>
          </View>
         </View>
       </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  commentList: {
    flexGrow: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginVertical: 20,
    backgroundColor: '#fff',
 },
 textContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
},
input: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginRight: 10,
},
commentContainer: {
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#EEA5A6', // Ayırt edici çizgi rengi
},
})