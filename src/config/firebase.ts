// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB27DU4Cp3khOTpQ58RPKvCpl6PH_2Agow",
	authDomain: "react-course-acf72.firebaseapp.com",
	projectId: "react-course-acf72",
	storageBucket: "react-course-acf72.appspot.com",
	messagingSenderId: "977251007639",
	appId: "1:977251007639:web:9cda6172169835830e7dd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
