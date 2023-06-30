import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const firebaseApp = initializeApp(config);
const database = getDatabase(firebaseApp);

const provider = new GoogleAuthProvider();
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

export { authGoogle, startLogin, startLogout, database};