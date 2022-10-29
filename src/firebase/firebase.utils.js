import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDj1cGXSCKNFWIhXx2AA8vcw13ZSQEDlfM",
    authDomain: "crown-db-1d859.firebaseapp.com",
    projectId: "crown-db-1d859",
    storageBucket: "crown-db-1d859.appspot.com",
    messagingSenderId: "20689352323",
    appId: "1:20689352323:web:becc60f83eb38197ed4db6",
    measurementId: "G-X8PD72SHSG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;