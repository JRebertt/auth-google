import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut  } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCWg9C9xzj1tH34Ex2ytEwT6xojm-khug",
  authDomain: "auth-5c0fc.firebaseapp.com",
  projectId: "auth-5c0fc",
  storageBucket: "auth-5c0fc.appspot.com",
  messagingSenderId: "300775427338",
  appId: "1:300775427338:web:b4325cde32ab2fcb067ef3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signOut };
