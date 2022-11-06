import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAd8Waa1q8GOZRNbv3THhkujUZ15k5IMQ4",
    authDomain: "skelbimaiapp-c36af.firebaseapp.com",
    projectId: "skelbimaiapp-c36af",
    storageBucket: "skelbimaiapp-c36af.appspot.com",
    messagingSenderId: "371592498513",
    appId: "1:371592498513:web:df10802b49cf7495af1770",
    measurementId: "G-HNQK40ERRK"
  };

  if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
  }

  export { firebase };