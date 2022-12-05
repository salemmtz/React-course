// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwIu0EbxKUHkArukM2v1Vdg0Uw7_HhSqs',
  authDomain: 'react-cursos-f137c.firebaseapp.com',
  projectId: 'react-cursos-f137c',
  storageBucket: 'react-cursos-f137c.appspot.com',
  messagingSenderId: '1048188985889',
  appId: '1:1048188985889:web:89ddeb042cc6d42fedf960',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
