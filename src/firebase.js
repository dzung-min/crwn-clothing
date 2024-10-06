// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOvKAZYFkbP68wakH2DVtMM0es2yfG14s",
  authDomain: "auth-demo-9f176.firebaseapp.com",
  projectId: "auth-demo-9f176",
  storageBucket: "auth-demo-9f176.appspot.com",
  messagingSenderId: "483616780068",
  appId: "1:483616780068:web:0ad7e7fd1fd54391598db1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
