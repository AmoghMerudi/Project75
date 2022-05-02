import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCKCtCxJMkrI50105cUJZklCo7hfWLs0Jw",
  authDomain: "e-ride-e7e48.firebaseapp.com",
  projectId: "e-ride-e7e48",
  storageBucket: "e-ride-e7e48.appspot.com",
  messagingSenderId: "26650064579",
  appId: "1:26650064579:web:db0d2aa1269de38990d476"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
