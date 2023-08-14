
// Import the functions from Firebase
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

import productos from '../../mock/products.json'
import categories from '../../mock/categories.json'

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exporting database data 
export const db = getFirestore(app)

// Utilizado para cargar los datos en Firebase

// categories.forEach((p) => {
//   addDoc(collection(db, 'categories'), p)
//   .then(dr => console.log('Doc agrgado id: ', dr))
//   .catch(err => console.error('Error al agregar el documento', err ))
// })

// productos.forEach((p) => {
//   addDoc(collection(db, 'products'), p)
//   .then(dr => console.log('Doc agrgado id: ', dr))
//   .catch(err => console.error('Error al agregar el documento', err ))
// })