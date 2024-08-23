import { StyleSheet, Image, View } from 'react-native';

export default function ImageViewer({ selectedImage,placeholderImageSource}) {

    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource ;
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource  } style={styles.image} />
    </View>
  );
}

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
});
