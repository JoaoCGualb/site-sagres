import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js'
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-storage.js'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF-e55zoaCWI1CzNLKtNDyHoWB0FZOhVc",
    authDomain: "deliverysagr.firebaseapp.com",
    projectId: "deliverysagr",
    storageBucket: "deliverysagr.appspot.com",
    messagingSenderId: "288069593337",
    appId: "1:288069593337:web:71041f444795fe0c911a28",
    measurementId: "G-KL89HW92S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app.getStorage)