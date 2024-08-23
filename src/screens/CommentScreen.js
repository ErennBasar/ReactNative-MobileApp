import { StyleSheet, Text, View ,TextInput,Button,ScrollView,TouchableOpacity,FlatList, KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React,{useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../firebase';
import CommentManager from '../../components/CommentManager';

      const CommentScreen = ({route}) => {

      const { cityName } = route.params || {};


      const user = auth.currentUser;
      const fullName = user?.displayName || '';
      const username = user?.displayName || '';

      const [inputText, setInputText] = useState('');
      const [comments, setComments] = useState([]);

      const commentManager = CommentManager({ 
        cityName, 
        onCommentsChange: (updatedComments) => setComments(updatedComments) 
      });
          const addCommentHandler = () => {
          if (inputText.trim() !== '') {
            const newComment = {
              id: Date.now().toString(),
              name: fullName,
              username: username,
              text: inputText,
              date: new Date().toLocaleString(),
            };
            commentManager.addComment(newComment);
            setInputText('');
          }
        };
        const deleteCommentHandler = (id) => {
          commentManager.deleteComment(id);
        };

        const clearCommentsHandler = () => {
          commentManager.clearComments();
        };
        const renderComment = ({ item }) => (
          <View style={styles.commentContainer}>
            <View style={styles.commentRow}>
              <Text style={styles.commentText}>{`${item.name} - ${item.date}`}</Text>
              {item.username === username && (
                <TouchableOpacity onPress={() => deleteCommentHandler(item.id)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Sil</Text>
                </TouchableOpacity>
              )}
            </View>
            <Text>{item.text}</Text>
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
            data={comments}
            renderItem={renderComment}   
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.commentList}
            />
          <Button title={`Tüm ${cityName} Yorumlarını Sil`} onPress={clearCommentsHandler} /> 
          <View style={styles.inputContainer}>
             <TextInput
             style={styles.input}
             placeholder='Yorumunuzu yazınız'
             value={inputText}
             onChangeText={(text) => setInputText(text)}
             >
             </TextInput>
             <Button title='Yorum Ekle' onPress={addCommentHandler}></Button>
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
commentDate: {
  fontSize: 12,
  color: '#555', // Tarih için farklı bir renk
  marginTop: 4, // Üstten biraz boşluk
},
commentRow: {
  flexDirection: 'row',
  justifyContent: 'space-between', // Yorum ve buton arasında boşluk bırakır
  alignItems: 'center',
},
})