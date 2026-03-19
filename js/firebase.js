const firebaseConfig = {
  apiKey: "AIzaSyD7ChJIlfTgvDgzQpyFV_Ol_7a46E2Qfj4",
  authDomain: "agriconnect.firebaseapp.com",
  projectId: "agriconnect",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
