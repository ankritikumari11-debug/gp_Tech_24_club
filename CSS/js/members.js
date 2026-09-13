import { db } from "./firebase.js";
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const coordinator = document.getElementById("coordinator");
const members = document.getElementById("members");

// Coordinator ka naam
coordinator.innerHTML = `
    <p><strong>Club Coordinator:</strong> Your Coordinator Name</p>
`;

// Firebase se students lana
try {
    const snapshot = await getDocs(collection(db, "students"));

    snapshot.forEach((doc) => {
        const data = doc.data();

        const member = document.createElement("p");
        member.textContent = data.name;

        members.appendChild(member);
    });

} catch (error) {
    console.error(error);
    members.innerHTML = "<p>Members load nahi ho pa rahe.</p>";
}
