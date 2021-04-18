import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD17d49krn4BV5EmkxX4EfZeeyLU0_TO0o",
  authDomain: "form-fc55d.firebaseapp.com",
  projectId: "form-fc55d",
  storageBucket: "form-fc55d.appspot.com",
  messagingSenderId: "798705685875",
  appId: "1:798705685875:web:86da30f644a4818c502106",
  measurementId: "G-GH8G0QHZLF"
};
// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }