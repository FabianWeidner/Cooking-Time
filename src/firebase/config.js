import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyASTntXXZY8NH5PkfaeAYPlF7UoPimM2-s',
  authDomain: 'cooking-time-site.firebaseapp.com',
  projectId: 'cooking-time-site',
  storageBucket: 'cooking-time-site.appspot.com',
  messagingSenderId: '105201810158',
  appId: '1:105201810158:web:ebafcda97fdff4e90ed1ff',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init sevices
const projectFirestore = firebase.firestore();

export { projectFirestore };
