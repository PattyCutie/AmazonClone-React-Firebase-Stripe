import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrwOx2pelJrmfTf0fsGSIg4iB9xyB_F6E",
  authDomain: "clone-a32d5.firebaseapp.com",
  projectId: "clone-a32d5",
  storageBucket: "clone-a32d5.appspot.com",
  messagingSenderId: "576712046915",
  appId: "1:576712046915:web:21659c3d800c61e6abd7f6",
  measurementId: "G-WKHD8FBL8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
  
