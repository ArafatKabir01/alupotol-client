// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNrB6WCwUO7QoLZNl62R9QxXi-mRkpx98",
    authDomain: "alupotol-auth.firebaseapp.com",
    projectId: "alupotol-auth",
    storageBucket: "alupotol-auth.appspot.com",
    messagingSenderId: "855403630774",
    appId: "1:855403630774:web:58ec8974fbce57923e5617",
    measurementId: "G-EHP7902XYE"
  };

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth