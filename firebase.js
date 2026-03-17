import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyD7ChJIlfTgvDgzQpyFV_Ol_7a46E2Qfj4",

authDomain: "agriconnect-933f0.firebaseapp.com",

projectId: "agriconnect-933f0",

storageBucket: "agriconnect-933f0.appspot.com",

messagingSenderId: "1028061092951",

appId: "1:1028061092951:web:66afa5dcf60dfeedfad712"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
