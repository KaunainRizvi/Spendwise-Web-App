
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBQFU1JDzC8qKTBM4tSr6wOLHPdb4geDSc",
  authDomain: "spendwise-de77d.firebaseapp.com",
  projectId: "spendwise-de77d",
  storageBucket: "spendwise-de77d.appspot.com",
  messagingSenderId: "335820978551",
  appId: "1:335820978551:web:afa1c43e7f4ec55ddfc972",
  measurementId: "G-C7B9W9Z5Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);