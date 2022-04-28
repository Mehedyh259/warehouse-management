import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLN7AYcYwNFB3IcpdkNH3_pgwWwJes_Io",
    authDomain: "medicine-inventory-76ade.firebaseapp.com",
    projectId: "medicine-inventory-76ade",
    storageBucket: "medicine-inventory-76ade.appspot.com",
    messagingSenderId: "991269273676",
    appId: "1:991269273676:web:181ae90ccd6775743934e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;