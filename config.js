 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBGXrJ-PEz0cx4rxhJ2VUDST-ZjOi8mJqo",
  databaseURL: 'https://school-attendance-app-aab1c-default-rtdb.firebaseio.com/',
  authDomain: "school-attendance-app-aab1c.firebaseapp.com",
  projectId: "school-attendance-app-aab1c",
  storageBucket: "school-attendance-app-aab1c.appspot.com",
  messagingSenderId: "707574231472",
  appId: "1:707574231472:web:6705996e53512ae83da675"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);
export default firebase.database()
 

  