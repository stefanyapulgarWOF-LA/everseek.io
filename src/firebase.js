import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBm-WgfJkv1AUi92PRr3tAo0pVSDH9xqpA",
    authDomain: "everseek-core.firebaseapp.com",
    projectId: "everseek-core",
    storageBucket: "everseek-core.appspot.com",
    messagingSenderId: "742556080815",
    appId: "1:742556080815:web:cfd070bd151ef9574dd25a",
    measurementId: "G-CZ5LVGFG87"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};