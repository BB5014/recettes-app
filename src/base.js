import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
	apiKey: "xxx",
	authDomain: "xxx",
	dataBaseURL: "xxx"
});

const base = Rebase.createClass(firebase.database());

// This is the named export
export { firebaseApp };

// This is a default export
export default base;
