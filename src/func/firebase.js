import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCIgDdVmO6fyVpsK6WYhwnSreAHwe1HOpE",
  authDomain: "tdk-tdk.firebaseapp.com",
  databaseURL: "https://tdk-tdk.firebaseio.com",
  projectId: "tdk-tdk",
  storageBucket: "tdk-tdk.appspot.com",
  messagingSenderId: "274715844654"
};

firebase.initializeApp(config);

export const database = firebase.database();

export default firebase;
