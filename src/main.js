import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeZY-AxTybPT36-c__363DaE55H8dp99o",
  authDomain: "fir-d0b85.firebaseapp.com",
  projectId: "fir-d0b85",
  storageBucket: "fir-d0b85.appspot.com",
  messagingSenderId: "265806182622",
  appId: "1:265806182622:web:b7eeabf7e3f6a2e2e8ea4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Función 
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
  } 
});

createApp(App).use(store).use(router).mount('#app')
