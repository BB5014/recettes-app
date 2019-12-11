import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
	apiKey: "xxx",
	authDomain: "xxx",
	dataBaseURL: "xxx"
});

const base = Rebase.createClass(firebase.database());

// Ceci est l'exportation nommée
export { firebaseApp };

// Ceci est l'exportation par défaut
export default base;
