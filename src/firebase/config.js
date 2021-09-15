import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3v2X3VvI5kT1mBa8KPObD_xspBXmLPb8",
    authDomain: "olxabc.firebaseapp.com",
    projectId: "olxabc",
    storageBucket: "olxabc.appspot.com",
    messagingSenderId: "1002389747390",
    appId: "1:1002389747390:web:6011f974178e9f786b90ef",
    measurementId: "G-DZ5MKDG3YY"
  };

  export default firebase.initializeApp(firebaseConfig);