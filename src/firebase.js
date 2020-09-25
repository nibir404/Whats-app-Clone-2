// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAK-ZF2kQbp53eHIq6gnBD5ouES3IcqoJs",
    authDomain: "whatsapp-clone-2b0f0.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-2b0f0.firebaseio.com",
    projectId: "whatsapp-clone-2b0f0",
    storageBucket: "whatsapp-clone-2b0f0.appspot.com",
    messagingSenderId: "543443811529",
    appId: "1:543443811529:web:e29f5bdd52e8f5e3b5a118",
    measurementId: "G-9VYYLKYST6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;