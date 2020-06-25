import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBkWIgJeGqc5unvAPHfXNXjPOlQti5-aUE',
  authDomain: 'hackathon-dev2020.firebaseapp.com',
  databaseURL: 'https://hackathon-dev2020.firebaseio.com',
  projectId: 'hackathon-dev2020',
  storageBucket: 'hackathon-dev2020.appspot.com',
  messagingSenderId: '739471949',
  appId: '1:739471949:web:197b7499d9cbf1d7eca204',
  measurementId: 'G-EKPJZCQMTP'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
