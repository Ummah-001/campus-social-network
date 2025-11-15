/* ======================================================
   🌐 Firebase Initialization (Shared for All Pages)
   ====================================================== */

// --- Load Firebase App & Firestore (version 10.x) ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Y1p0xYevSPDf2y6fmGWq5gNnPi7tCgs",
  authDomain: "campus-social-network-a2f86.firebaseapp.com",
  databaseURL: "https://campus-social-network-a2f86-default-rtdb.firebaseio.com",
  projectId: "campus-social-network-a2f86",
  storageBucket: "campus-social-network-a2f86.firebasestorage.app",
  messagingSenderId: "300870666515",
  appId: "1:300870666515:web:62b5e5c816452d7431b2e6",
  measurementId: "G-V813YXHDBE"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);

// --- Initialize Firestore (Database) ---
const db = getFirestore(app);

// --- Make db available to all inline scripts globally ---
window.db = db;

console.log("✅ Firebase successfully initialized.");
