import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View  } from 'react-native';
import { auth} from '../../firebase';
import { Picker } from '@react-native-picker/picker';
import { createUserWithEmailAndPassword,updateProfile  } from 'firebase/auth';


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender,setGender] = useState('');
    const [username, setUsername] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Kullanıcı:', user.email);

                updateProfile(user, {
                    displayName: `${firstName} ${lastName} ${username}`,
                    photoURL: gender
                }).then(() => {
                    console.log('Kullanıcı kaydedildi:', user.displayName);
                    
                    navigation.navigate('CommentScreen',{
                        firstName: firstName,
                        lastName: lastName,
                        username: username 
                    }); // Kayıt başarılıysa ana ekrana yönlendirin
                }).catch(error => {
                    console.error("Profil güncellenirken bir hata oluştu:", error);
                });
            })
            .catch(error => alert(error.message));
    };

    return (
        <View style={styles.container}>
           
            <TextInput
                placeholder="First Name"
                style={styles.textInputStyle}
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder="Last Name"
                style={styles.textInputStyle}
                value={lastName}
                onChangeText={setLastName}
            />
             <TextInput
                placeholder="Username"
                style={styles.textInputStyle}
                value={username}
                onChangeText={setUsername}
            />
           
            <TextInput
                placeholder="Email"
                style={styles.textInputStyle}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                style={styles.textInputStyle}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
             <Picker
                selectedValue={gender}
                style={styles.pickerStyle}
                onValueChange={(itemValue) => setGender(itemValue)}
            >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#4158A6' }]}
                onPress={handleSignUp}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#FF8343',
        padding: 10,
        margin: 10,
        width: 200,
        borderRadius: 15,
    },
    button: {
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    pickerStyle: {
    
        width: 200,
        marginTop: 10,
        marginBottom: 10,
    },
});
