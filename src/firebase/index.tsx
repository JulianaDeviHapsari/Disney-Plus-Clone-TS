import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disney-plus-clone-46783.firebaseapp.com",
  projectId: "disney-plus-clone-46783",
  storageBucket: "disney-plus-clone-46783.firebasestorage.app",
  messagingSenderId: "224453657639",
  appId: "1:224453657639:web:8cb3632678a12717563a02",
  measurementId: "G-H6DFP9M5TY"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;