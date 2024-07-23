// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNWqEMa4Pm4jnmasSeZPxcmk48unWagHA",
    authDomain: "guardapp-4624f.firebaseapp.com",
    projectId: "guardapp-4624f",
    storageBucket: "guardapp-4624f.appspot.com",
    messagingSenderId: "1066137668119",
    appId: "1:1066137668119:web:4033909f123c69bfacaa52"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
