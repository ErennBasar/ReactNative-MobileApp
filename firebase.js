// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyu_fBYlK4hZl7XJRHUrQaWNFgD-sbFmo",
  authDomain: "login-7797a.firebaseapp.com",
  projectId: "login-7797a",
  storageBucket: "login-7797a.appspot.com",
  messagingSenderId: "85688080234",
  appId: "1:85688080234:web:50617f4320415944c2b713"
};

// Initialize Firebase
if(!firebaseConfig.apps.length){

  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };