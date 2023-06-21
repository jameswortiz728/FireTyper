import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup } from "firebase/auth";
import 'firebase/compat/firestore';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const firebaseApp = firebase.initializeApp(config);
const database = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const authGoogle = getAuth();

const startLogin = () => {
    signInWithPopup(authGoogle, provider)
        .catch((error) =>
            console.log("Caught error popup: " + error)
        );
}

const startLogout = () => {
    authGoogle.signOut();
}

export { firebase, authGoogle, startLogin, startLogout, database as default };