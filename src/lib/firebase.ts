// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAsIis-fW6MIZ26ac3q_35HBs7S8sCd5C0",
//   authDomain: "planify---todo-app.firebaseapp.com",
//   projectId: "planify---todo-app",
//   storageBucket: "planify---todo-app.firebasestorage.app",
//   messagingSenderId: "891918275294",
//   appId: "1:891918275294:web:a6b556ba7a8306ddb8684f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsIis-fW6MIZ26ac3q_35HBs7S8sCd5C0",
  authDomain: "planify---todo-app.firebaseapp.com",
  projectId: "planify---todo-app",
  storageBucket: "planify---todo-app.firebasestorage.app",
  messagingSenderId: "891918275294",
  appId: "1:891918275294:web:a6b556ba7a8306ddb8684f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);