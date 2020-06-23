import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB-Uup_L_XFIanIUCWRFcKfJjeSSwMTqBE",
  authDomain: "room-one.firebaseapp.com",
  databaseURL: "https://room-one.firebaseio.com",
  projectId: "room-one",
  storageBucket: "room-one.appspot.com",
  messagingSenderId: "1076036960018",
  appId: "1:1076036960018:web:86c16a257e7e1b699efdcb",
  measurementId: "G-93GJ8JWRGK"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };