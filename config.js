import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2Poh8VTrSu9iGaTuGwB9IWHV2sCiFNVI",
    authDomain: "wilyapp-59306.firebaseapp.com",
    projectId: "wilyapp-59306",
    storageBucket: "wilyapp-59306.appspot.com",
    messagingSenderId: "541500203838",
    appId: "1:541500203838:web:0f48391b3aa0b9a232426f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();