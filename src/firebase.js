import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWjWTJhxwk6F3cXSaBN2C-E1Qr91TdPrQ",
  authDomain: "el-pollo-comilon.firebaseapp.com",
  projectId: "el-pollo-comilon",
  storageBucket: "el-pollo-comilon.appspot.com",
  messagingSenderId: "55853410156",
  appId: "1:55853410156:web:e499e868e43e5e433ab549",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
