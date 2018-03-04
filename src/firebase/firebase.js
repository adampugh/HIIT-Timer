import * as firebase from "firebase";

let config = {};
if (process.env.NODE_ENV === "test") {
    config = {
        apiKey: "AIzaSyDJoLLDXUfKhNokg89yRpgow23VebPZpRg",
        authDomain: "hiit-timer-test.firebaseapp.com",
        databaseURL: "https://hiit-timer-test.firebaseio.com",
        projectId: "hiit-timer-test",
        storageBucket: "hiit-timer-test.appspot.com",
        messagingSenderId: "74702978482"
      };
} else {
    config = {
        apiKey: "AIzaSyBc36320N25Y3wMYd_gi55mNySRe8S-v3I",
        authDomain: "hiit-timer-project.firebaseapp.com",
        databaseURL: "https://hiit-timer-project.firebaseio.com",
        projectId: "hiit-timer-project",
        storageBucket: "hiit-timer-project.appspot.com",
        messagingSenderId: "86774564070"
    };
}


firebase.initializeApp(config);
 
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
