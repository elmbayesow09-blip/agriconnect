import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 CONFIGURATION FIREBASE (à remplacer si besoin)
const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "agriconnect-933f0.firebaseapp.com",
  projectId: "agriconnect-933f0",
  storageBucket: "agriconnect-933f0.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// 🚀 Initialisation
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
