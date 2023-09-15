import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3MYodMbA1mY2Kkh6uUf1JPM9iTzifNqo",
    authDomain: "ninja-firegrame.firebaseapp.com",
    databaseURL: "https://ninja-firegrame.firebaseio.com",
    projectId: "ninja-firegrame",
    storageBucket: "ninja-firegrame.appspot.com",
    messagingSenderId: "702993921674",
    appId: "1:702993921674:web:439aab36997313078a5f73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{ projectStorage,projectFirestore,timestamp};