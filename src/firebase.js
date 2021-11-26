//to use firebase app
// import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9
//to use auth
// import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9
//to use firestore
// import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyBXLl0eHOKvM06mJrjXp7TIBKepv1jUyk0",
    authDomain: "linkedin-clone-b0ec2.firebaseapp.com",
    projectId: "linkedin-clone-b0ec2",
    storageBucket: "linkedin-clone-b0ec2.appspot.com",
    messagingSenderId: "380223084202",
    appId: "1:380223084202:web:9dbe7af2e6b9b40f6fe2d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// To connect your app with firebase, database
const db = firebaseApp.firestore();
// to get the db
const auth = firebase.auth();
// to get the auth function of firebase

export { db, auth}
// export then