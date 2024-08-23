import { StyleSheet, Text, View,TextInput ,Image } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../../components/ImageViewer'; 
import Button from '../../components/Button';

const PlaceholderImage = require('../../assets/PlacesImages/background-image.png');

const ImageScreen = ({route}) => {

    const {placeName} = route.params || {};
  
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert('You did not select any image.');
      }
    };
  return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
            <Text> {placeName} Image Screen</Text>
          <View style={styles.imageContainer}>
            <ImageViewer  
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
                />
          </View>
          <View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
              
          </View>  
        </View>
      
    
  )
 }

export default ImageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})