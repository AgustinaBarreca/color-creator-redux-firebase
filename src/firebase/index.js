import { getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey: "AIzaSyAWdIgUykaAgEcTXpU-uJZLI-Jihgs6hUs",
  authDomain: "color-app-3c13b.firebaseapp.com",
  projectId: "color-app-3c13b",
  storageBucket: "color-app-3c13b.appspot.com",
  messagingSenderId: "1040977359586",
  appId: "1:1040977359586:web:3f47e0226ed638a19d64bb" */
  databaseURL: 'https://colors-app-dd2dc-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
