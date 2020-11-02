import * as firebase from 'firebase'
require('@firebase/firestore');

    
var firebaseConfig = {
    apiKey: "AIzaSyBGa7TONk30Emrjc-Htdj03aHGi5pwuR1g",
    authDomain: "wireleibrary-c2858.firebaseapp.com",
    databaseURL: "https://wireleibrary-c2858.firebaseio.com",
    projectId: "wireleibrary-c2858",
    storageBucket: "wireleibrary-c2858.appspot.com",
    messagingSenderId: "681355978939",
    appId: "1:681355978939:web:b6fa6f8a139cc56866a19e",
    measurementId: "G-Y1T82B6LYK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore();