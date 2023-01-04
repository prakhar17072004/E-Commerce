const firebaseConfig = {
  apiKey: "AIzaSyBKxxm1lVXwpdM6uT2VHrfCGuUgd11nG_s",
  authDomain: "ecommerce-2aed7.firebaseapp.com",
  projectId: "ecommerce-2aed7",
  storageBucket: "ecommerce-2aed7.appspot.com",
  messagingSenderId: "447704073591",
  appId: "1:447704073591:web:2c3c495532e60370828d72",
  measurementId: "G-WGSEBS3EVL"
};
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
