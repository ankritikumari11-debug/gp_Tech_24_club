import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqAbVissetSvYK-NFq_KC8YspuRNs-jNM",
  authDomain: "gp-tech-club.firebaseapp.com",
  projectId: "gp-tech-club",
  storageBucket: "gp-tech-club.firebasestorage.app",
  messagingSenderId: "68054117202",
  appId: "1:68054117202:web:b40d6561cbde46db56288b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);