// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIP8sYcf1eu15BDVYEtWPx4lxkFvO0BZs",
  authDomain: "worm-70d77.firebaseapp.com",
  projectId: "worm-70d77",
  storageBucket: "worm-70d77.appspot.com",
  messagingSenderId: "421293673425",
  appId: "1:421293673425:web:41b2067791c11ab5d1aef0",
  measurementId: "G-8XDYFF884S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);