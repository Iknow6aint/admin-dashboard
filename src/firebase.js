// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYj7UgxVu61mirHT1HBE3g1glo7p225r0",
    authDomain: "shopper-b6ece.firebaseapp.com",
    projectId: "shopper-b6ece",
    storageBucket: "shopper-b6ece.appspot.com",
    messagingSenderId: "571184601138",
    appId: "1:571184601138:web:b12e068ee54c4ec308442b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app