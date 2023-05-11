import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUOh2_A35B2Cq4eE1AkXELLLqUV4ic1wo",
    authDomain: "parceiros-de-rua.firebaseapp.com",
    projectId: "parceiros-de-rua",
    storageBucket: "parceiros-de-rua.appspot.com",
    messagingSenderId: "424673868765",
    appId: "1:424673868765:web:f813119322e17b844f1434",
    measurementId: "G-4MTJKLJ0LG"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };