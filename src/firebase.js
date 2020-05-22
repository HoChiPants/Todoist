import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCK20oDh8YwgyTvzrZgUp9i_aAFelDU_Os",
  authDomain: "todoist-c2712.firebaseapp.com",
  databaseURL: "https://todoist-c2712.firebaseio.com",
  projectId: "todoist-c2712",
  storageBucket: "todoist-c2712.appspot.com",
  messagingSenderId: "874040988454",
  appId: "1:874040988454:web:033dd3407c75faada827e7",
});

export {firebaseConfig as firebase};