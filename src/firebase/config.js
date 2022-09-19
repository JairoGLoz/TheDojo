import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAyvrukWzUkLvm9N0YwGzULsoAQRQba-io",
    authDomain: "thedojosite-82cba.firebaseapp.com",
    projectId: "thedojosite-82cba",
    storageBucket: "thedojosite-82cba.appspot.com",
    messagingSenderId: "907980325790",
    appId: "1:907980325790:web:4511d6b21f5d6c46d68c8f"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}