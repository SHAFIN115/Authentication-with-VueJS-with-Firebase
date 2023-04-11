import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "95676861680",
  appId: "1:95676861680:web:843f0db7175e95b4084635",
  measurementId: "G-K265W163T2"
};

initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
// console.debug('firebaseAuth', firebaseAuth);

export { firebaseAuth };
