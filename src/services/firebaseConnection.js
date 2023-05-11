import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDUXL0_b0sRkTCEThiOXjip0izWjJoLah4",
    authDomain: "parceiros-de-rua-d108d.firebaseapp.com",
    projectId: "parceiros-de-rua-d108d",
    storageBucket: "parceiros-de-rua-d108d.appspot.com",
    messagingSenderId: "892768758449",
    appId: "1:892768758449:web:9205be4923668d928b5090",
    measurementId: "G-3VPRK9HWVJ"
};


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };