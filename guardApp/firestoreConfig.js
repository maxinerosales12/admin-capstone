import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWM6WM0oBEiQXbs7BWdmUXY_zTAy5dms4",
    authDomain: "capstone-b25eb.firebaseapp.com",
    projectId: "capstone-b25eb",
    storageBucket: "capstone-b25eb.appspot.com",
    messagingSenderId: "531265456538",
    appId: "1:531265456538:web:ad9ad5137024ea163e5223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "firestoreApp");

// Initialize Firestore
const db = getFirestore(app);

export { db };
