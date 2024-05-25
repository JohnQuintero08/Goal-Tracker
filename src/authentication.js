// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,
        onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_O-6cYj54GaGmliy6u-nCduXXjrYAQMU",
  authDomain: "goal-tracker-3447a.firebaseapp.com",
  projectId: "goal-tracker-3447a",
  storageBucket: "goal-tracker-3447a.appspot.com",
  messagingSenderId: "105020253875",
  appId: "1:105020253875:web:28838942a9615863b972c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function createUser(email, password){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      console.log(error.message)
    });
}

function signIn(email, password){
  return signInWithEmailAndPassword(auth, email, password)
}

function signOutfunction(){
  return signOut(auth).then(() => {
    return true
  }).catch((error) => {
    return false
  });
}


export { createUser, signIn, signOutfunction}