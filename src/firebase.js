import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAOloVwEuerykyp4imCJKt4c87rpae3JZU',
  authDomain: 'connect-in-11aa6.firebaseapp.com',
  projectId: 'connect-in-11aa6',
  storageBucket: 'connect-in-11aa6.appspot.com',
  messagingSenderId: '598310069285',
  appId: '1:598310069285:web:10b2526f9dd366cf1c4bcc',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
