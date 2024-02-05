import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAFq53ln9-FWiWuYmp4ij4_jW5QJG4ni_g",

  authDomain: "spendwise-react.firebaseapp.com",

  projectId: "spendwise-react",

  storageBucket: "spendwise-react.appspot.com",

  messagingSenderId: "167281935205",

  appId: "1:167281935205:web:e1a53c2f09733cd9f7d78c"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const transactionsCollection = collection(db, "transactions");
const usersCollection = collection(db, "users");

export { db, transactionsCollection, usersCollection };
