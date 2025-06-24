// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD47W-0xnAE5Y9PZLkhyJocnLgsZoDFwZQ",
    authDomain: "bakery-shop-b6bb2.firebaseapp.com",
    projectId: "bakery-shop-b6bb2",
    storageBucket: "bakery-shop-b6bb2.firebasestorage.app",
    messagingSenderId: "1028782496122",
    appId: "1:1028782496122:web:78868b797032419de99ec3",
    // measurementId: "G-W077N4NP8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);