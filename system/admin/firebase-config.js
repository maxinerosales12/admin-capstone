// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAWM6WM0oBEiQXbs7BWdmUXY_zTAy5dms4",
    authDomain: "capstone-b25eb.firebaseapp.com",
    projectId: "capstone-b25eb",
    storageBucket: "capstone-b25eb.appspot.com",
    messagingSenderId: "531265456538",
    appId: "1:531265456538:web:ad9ad5137024ea163e5223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(app);

// Export db
export { db };
