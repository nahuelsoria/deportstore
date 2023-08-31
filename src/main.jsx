import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcM4OlprlosRkXW34qDXSG5A_v1JyDAlA",
  authDomain: "deportstore-9adc7.firebaseapp.com",
  projectId: "deportstore-9adc7",
  storageBucket: "deportstore-9adc7.appspot.com",
  messagingSenderId: "912145691223",
  appId: "1:912145691223:web:b80a57844b4aee037ae912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
    </ChakraProvider>
)
