import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB-bizA-pLyF5aM3Ktgrb-_I1P5YSM_nP4",
    authDomain: "container-tracking-3b35d.firebaseapp.com",
    projectId: "container-tracking-3b35d",
    storageBucket: "container-tracking-3b35d.appspot.com",
    messagingSenderId: "1053328884538",
    appId: "1:1053328884538:web:e2cbdb7ebedc9576464603"
}

firebase.initializeApp(config)

export default firebase