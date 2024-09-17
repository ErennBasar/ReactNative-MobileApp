import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const DenemeScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: false }, response => {
      console.log('ImagePicker Response:', response); // Yanıtı kontrol edin
      if (response.didCancel) {
        Alert.alert('Kullanıcı fotoğraf seçmeyi iptal etti.');
      } else if (response.errorCode) {
        Alert.alert('Fotoğraf seçme hatası: ' + response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      } else {
        Alert.alert('Bilgi: Fotoğraf seçme işlemi başarılı, ancak hiç fotoğraf alınamadı.');
      }
    });
  };

  return (
    <View style={styles.container}>  
      <Button title="Fotoğraf Seç" onPress={selectImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default DenemeScreen;
