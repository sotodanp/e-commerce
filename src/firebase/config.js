import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC52uuarGknx_4s6Yi1XZm0mrI6hgPpGv8",
    authDomain: "eshop-1cb91.firebaseapp.com",
    projectId: "eshop-1cb91",
    storageBucket: "eshop-1cb91.appspot.com",
    messagingSenderId: "985086167494",
    appId: "1:985086167494:web:634accb1ec5c31b9de8ac7"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init auth
const auth = getAuth()

export { db, auth }