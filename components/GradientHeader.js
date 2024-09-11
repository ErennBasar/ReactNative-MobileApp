import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const GradientHeader = ({title}) => {

const navigation = useNavigation();
  
  return (
    <LinearGradient
      colors={['blue', 'purple']} // Geçişli renkler
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.headerContainer}>
        <View>

            <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                <Ionicons name="menu" size={28} color="white" />
                </TouchableOpacity>
        </View>
        <View>

                <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    padding: 10,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 20,
    width: 240,
  },
  menuButton: {
    paddingRight: 16,
  },
});

export default GradientHeader;
