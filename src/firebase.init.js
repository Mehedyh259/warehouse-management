import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID



    // apiKey: "AIzaSyDLN7AYcYwNFB3IcpdkNH3_pgwWwJes_Io",
    // authDomain: "medicine-inventory-76ade.firebaseapp.com",
    // projectId: "medicine-inventory-76ade",
    // storageBucket: "medicine-inventory-76ade.appspot.com",
    // messagingSenderId: "991269273676",
    // appId: "1:991269273676:web:181ae90ccd6775743934e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;