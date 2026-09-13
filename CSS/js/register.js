import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

document.getElementById("registerBtn").onclick = async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "students", user.user.uid), {
    name,
    email
  });

  alert("Registration Successful!");
};