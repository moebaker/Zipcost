import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCCyQgVd8kd8IspJQ2-W_I_FJdqpeCBYKo",
    authDomain: "rizzchat-cl-m.firebaseapp.com",
    projectId: "rizzchat-cl-m",
    storageBucket: "rizzchat-cl-m.appspot.com",
    messagingSenderId: "460938379607",
    appId: "1:460938379607:web:dbc933d1524bbbad1fbe12",
    measurementId: "G-2ZXKWGJ7YM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};