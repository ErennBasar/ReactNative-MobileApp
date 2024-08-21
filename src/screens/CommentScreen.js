import { StyleSheet, Text, View ,TextInput,Button,ScrollView,TouchableOpacity,FlatList, KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React,{useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../firebase';

const CommentScreen = () => {


const user = auth.currentUser;
const fullName = user?.displayName || '';
const username = user?.displayName || '';

const [inputText, setInputText] = useState('');
const [comment,setComment] = useState([])

useEffect(() => {
  loadComments();
}, []);
const clearAllAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage tamamen temizlendi');
  } catch (error) {
    console.error('AsyncStorage temizlenirken bir hata oluştu:', error);
  }
};

const loadComments = async () => {
  try {
      const storedComments = await AsyncStorage.getItem('comments');
      if (storedComments !== null) {
          setComment(JSON.parse(storedComments));
      }
  } catch (error) {
      console.error('Failed to load comments:', error);
  }
};
const saveComments = async (comments) => {
  try {
      await AsyncStorage.setItem('comments', JSON.stringify(comments));
  } catch (error) {
      console.error('Failed to save comments:', error);
  }
};

const addComment = () => {
  if (inputText.trim() !== ''){  
    const newComment = { id: Date.now().toString(),name: fullName,username: username, text: inputText };
    const newComments = [...comment, newComment];
    setComment(newComments);
    saveComments(newComments);
    setInputText('');
  }
}
const deleteComment = (id) => {
  const filteredComments = comment.filter(c => c.id !== id);
  setComment(filteredComments);
  saveComments(filteredComments);
};
const renderComment = ({ item }) => (
  <View style={styles.commentContainer}>
    <Text style={styles.commentText}>{`${item.name} `}</Text>
    <Text>{item.text}</Text>
    {item.username === username && ( // Yalnızca kullanıcı kendi yorumlarını silebilsin
    <TouchableOpacity onPress={() => deleteComment(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    )}
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
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.commentList}
            />
          <Button title='Tüm Yorumları Sil' onPress={clearAllAsyncStorage}></Button> 
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
    
  },
  commentList: {
    flexGrow: 1,
    
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginVertical: 4,
    backgroundColor: '#ccc',
 },

input: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#FF8343',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginRight: 10,
},
commentContainer: {
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF8343', // Ayırt edici çizgi rengi
},
commentText: {
  fontWeight: 'bold',
},
deleteButton: {
  backgroundColor: '#FF0000',
  padding: 5,
  borderRadius: 5,
},
deleteButtonText: {
  color: '#FFF',
},
})