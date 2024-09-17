import React, { useState } from 'react';
import { Button, Image, View, Alert,Text,TextInput,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase'; // Firebase config dosyanızı buraya ekleyin
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);  // Yüklenen resim URL'si
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');  

  const pickImage = async () => {
    try {
      // Galeriden fotoğraf seçme işlemi
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // Seçilen fotoğraf varsa URI kaydedilir
      if (!result.canceled) {
        const selectedImageUri = result.assets[0].uri; // URI doğru alınır
        setImage(selectedImageUri);
        console.log('Fotoğraf seçildi:', selectedImageUri);
      } else {
        console.log('Fotoğraf seçme işlemi iptal edildi.');
      }
    } catch (error) {
      console.log('Fotoğraf seçme hatası:', error.message);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert('Lütfen önce bir fotoğraf seçin!');
      return;
    }
    if (!title) {
      Alert.alert('Lütfen bir başlık girin!');
      return;
    }
    setUploading(true);

    try {
      const response = await fetch(image); // URI'den dosya alınır
      const blob = await response.blob(); // Blob formatına dönüştürülür

      const storageRef = ref(storage, `images/${Date.now()}.jpg`); // Firebase Storage'da konum belirlenir

      // Dosya Firebase Storage'a yüklenir
      await uploadBytes(storageRef, blob);
      console.log('Fotoğraf Firebase Storage\'a yüklendi.');

      // Yüklenen fotoğrafın URL'si alınır
      const url = await getDownloadURL(storageRef);
      setUploadedImageUrl(url);  // Yüklenen fotoğrafın URL'sini state'e kaydederiz
      console.log('Yüklenen fotoğrafın URL\'si:', url);
      Alert.alert('Fotoğraf başarıyla yüklendi!', `URL: ${url}`);
    } catch (error) {
      console.log('Fotoğraf yükleme hatası:', error.message);
      Alert.alert('Fotoğraf yüklenirken bir hata oluştu!', error.message);
    }finally {
      setUploading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* Fotoğraf Seçme Butonu */}
      <Button title="Galeriden Fotoğraf Seç" onPress={pickImage} />

      {/* Seçilen Fotoğrafı Gösterme */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      {/* Başlık Ekleme */}
      {image && (
        <TextInput
          style={styles.input}
          placeholder="Başlık ekleyin..."
          value={title}
          onChangeText={setTitle}
        />
      )}

      {/* Fotoğrafı Yükleme Butonu */}
      {image && <Button title="Fotoğrafı Yükle" onPress={uploadImage} />}

      {/* Yükleme işlemi devam ederken gösterim */}
      {uploading && <Text>Yükleniyor...</Text>}

      {/* Yüklenen Fotoğrafı Firebase Storage'dan Gösterme */}
      {uploadedImageUrl && (
        <View>
          <Text>Yüklenen Fotoğraf:</Text>
          <Image source={{ uri: uploadedImageUrl }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
});
