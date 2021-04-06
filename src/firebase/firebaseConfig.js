import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN3R3q4K-QVmIB1eWBi12mkws5iN91boE",
  authDomain: "employee-manager-sec-1.firebaseapp.com",
  databaseURL: "https://employee-manager-sec-1-default-rtdb.firebaseio.com",
  projectId: "employee-manager-sec-1",
  storageBucket: "employee-manager-sec-1.appspot.com",
  messagingSenderId: "213882699381",
  appId: "1:213882699381:web:e47d9f6234659e8f8a823c",
  measurementId: "G-8K7WGZRDZW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;