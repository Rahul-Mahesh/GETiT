// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgknW6gjSSToK5YdfoSX8If5pMderKmnY",
  authDomain: "getit-ca28e.firebaseapp.com",
  projectId: "getit-ca28e",
  storageBucket: "getit-ca28e.appspot.com",
  messagingSenderId: "348914078317",
  appId: "1:348914078317:web:063ce811522becc55f2564"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0)
{app = firebase.initializeApp(firebaseConfig);
}
else
{app = firebase.app()
}

const auth = firebase.auth()

export{ auth }