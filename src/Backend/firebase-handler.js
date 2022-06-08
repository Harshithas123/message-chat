
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsGG_PVQNaWKcS2-pU7-oROFnzbI_39rs",
  authDomain: "fir-cdff2.firebaseapp.com",
  databaseURL: "https://fir-cdff2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-cdff2",
  storageBucket: "fir-cdff2.appspot.com",
  messagingSenderId: "441449813816",
  appId: "1:441449813816:web:155201959d1024a3cfd3cd",
  measurementId: "G-L2RB4BM5KD"
};


const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app); 