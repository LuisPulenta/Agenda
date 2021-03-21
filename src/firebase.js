import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4QqyyYykjAdaxwy7DmY7WToRojmFtWPk",
    authDomain: "agenda-dd4de.firebaseapp.com",
    projectId: "agenda-dd4de",
    storageBucket: "agenda-dd4de.appspot.com",
    messagingSenderId: "664212956082",
    appId: "1:664212956082:web:02211f281ac497436dfaab"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)