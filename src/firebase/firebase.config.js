// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBK4FlotWvVAaqTNHDRUW9dFNIg5LbKmow",
   authDomain: "dragon-news-page.firebaseapp.com",
   projectId: "dragon-news-page",
   storageBucket: "dragon-news-page.appspot.com",
   messagingSenderId: "270623292366",
   appId: "1:270623292366:web:9a1bd948f4c666ec1f899f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
