// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmidlbj_vdSh6KtEVZ4IXjODLQDdAWi4I",
  authDomain: "mern-ecom-fashion.firebaseapp.com",
  projectId: "mern-ecom-fashion",
  storageBucket: "mern-ecom-fashion.appspot.com",
  messagingSenderId: "89849984452",
  appId: "1:89849984452:web:7df5492fccbfe241432091",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
