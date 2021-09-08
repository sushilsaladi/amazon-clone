// Import the functions you need from the SDKs
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcjC55vyY87VFz3MG7SmW6nowAXzqBIOs",
    authDomain: "clone-68aea.firebaseapp.com",
    projectId: "clone-68aea",
    storageBucket: "clone-68aea.appspot.com",
    messagingSenderId: "914052440446",
    appId: "1:914052440446:web:2a3946f9b9bed3d2d5d32f",
    measurementId: "G-Z8HP000ZWG"
});

const auth = firebase.auth()

export {auth}