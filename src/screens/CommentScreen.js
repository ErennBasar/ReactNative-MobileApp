import { StyleSheet, Text, View ,TextInput,Button,ScrollView,TouchableOpacity,FlatList, KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React,{useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../firebase';

const CommentScreen = ({route}) => {

const { cityName } = route.params || {};


const user = auth.currentUser;
const fullName = user?.displayName || '';
const username = user?.displayName || '';

const [inputText, setInputText] = useState('');
const [comment,setComment] = useState([])

useEffect(() => {
  loadComments();
}, []);

const clearCityComments = async () => {
  try {
    await AsyncStorage.removeItem(`${cityName}Comments`); // Sadece ilgili şehre ait yorumları temizler
    setComment([]); // Ekrandaki yorumları da temizler
    console.log(`${cityName} yorumları temizlendi`);
  } catch (error) {
    console.error('Yorumlar temizlenirken bir hata oluştu:', error);
  }
};

const loadComments = async () => {
  try {
      const storedComments = await AsyncStorage.getItem(`${cityName}Comments`);
      if (storedComments !== null) {
          setComment(JSON.parse(storedComments));
          console.log(`Yorumlar yüklendi:`, JSON.parse(storedComments));
        } else {
          console.log(`No comments found for ${cityName}`);
        }
      
  } catch (error) {
      console.error('Failed to load comments:', error);
  }
};
const saveComments = async (comments) => {
  try {
      await AsyncStorage.setItem(`${cityName}Comments`, JSON.stringify(comments));
  } catch (error) {
      console.error('Failed to save comments:', error);
  }
};

const addComment = () => {
  if (inputText.trim() !== ''){  
    const newComment = { id: Date.now().toString(),name: fullName,username: username, text: inputText,date: new Date().toLocaleString()};
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
    <View style={styles.commentRow}>
    <Text style={styles.commentText}>{`${item.name} - ${item.date} `}</Text>

    {item.username === username && ( // Yalnızca kullanıcı kendi yorumlarını silebilsin
    <TouchableOpacity onPress={() => deleteComment(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
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
            data={comment}
            renderItem={renderComment}   
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.commentList}
            />
          <Button title={`Tüm ${cityName} Yorumlarını Sil`} onPress={clearCityComments} /> 
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