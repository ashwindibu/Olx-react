import firebase from 'firebase';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhFZ8Vl5R-B-gxzU8Yrk4RcpCbxjCJ8H8",
  authDomain: "olx-project-a3a6a.firebaseapp.com",
  projectId: "olx-project-a3a6a",
  storageBucket: "olx-project-a3a6a.appspot.com",
  messagingSenderId: "480905648513",
  appId: "1:480905648513:web:a010b5eef3dc1dc0907080",
  measurementId: "G-2FSEPYRY5R"
};

export default firebase.initializeApp(firebaseConfig)