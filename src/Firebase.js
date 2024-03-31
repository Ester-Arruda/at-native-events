// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmgnF313xX-OUh-8szrxYwilRTSeQ783A",
  authDomain: "at-native-events.firebaseapp.com",
  databaseURL: "https://at-native-events-default-rtdb.firebaseio.com",
  projectId: "at-native-events",
  storageBucket: "at-native-events.appspot.com",
  messagingSenderId: "1032543165116",
  appId: "1:1032543165116:web:ee3d54275f74431b578eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;