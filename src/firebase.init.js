// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATYQWOWy2DWf5JQmUvnq9GDifOea1llAo",
    authDomain: "ielts-proficiency-assignment.firebaseapp.com",
    projectId: "ielts-proficiency-assignment",
    storageBucket: "ielts-proficiency-assignment.appspot.com",
    messagingSenderId: "265900651377",
    appId: "1:265900651377:web:b2b27542e1a148833abcd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

