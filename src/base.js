import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJaByuPnWwDkQU7tsZtW1SmTcfytdWj6s",
  authDomain: "catch-of-the-day-5da7c.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-5da7c.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
