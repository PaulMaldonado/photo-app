import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import store from './store'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
  firebase.initializeApp(firebaseConfig);

  // Manejando el store.js
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user);
});

  export default firebase;