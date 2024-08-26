// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj-6BhUJdBUFOPiSYhes9J-OS-oh5K_2o',
  authDomain: 'expense-tracker-b6da9.firebaseapp.com',
  projectId: 'expense-tracker-b6da9',
  storageBucket: 'expense-tracker-b6da9.appspot.com',
  messagingSenderId: '664532703446',
  appId: '1:664532703446:web:619cf83e6eacb366dc5177',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
