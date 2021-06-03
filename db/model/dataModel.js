import  firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAqlr05QksJQJHnJr_iOXOQPpGFYK3eNuI",
  authDomain: "airtime-68ec4.firebaseapp.com",
  databaseURL: "https://airtime-68ec4-default-rtdb.firebaseio.com",
  projectId: "airtime-68ec4",
  storageBucket: "airtime-68ec4.appspot.com",
  messagingSenderId: "",
  appId: "1:545695197460:android:5f8de33b8d4c71c384fa01"
};

firebase.initializeApp(firebaseConfig);

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json"); 

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://airtime-68ec4-default-rtdb.firebaseio.com"
// });

module.exports = {
  signUp: function (user, callback) {
    console.log('data',user)
    firebase.firestore()
      .collection('users')
      .add({user})
      .then(data => callback(data))
      .catch(error => console.log(error));
  },
};

