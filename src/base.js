import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAeoTLMpgvehRzkOiEWVyqA-DQay_5gi9c",
	authDomain: "app-recettes-a40b4.firebaseapp.com",
	databaseURL: "https://app-recettes-a40b4.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// Ceci est l'exportation nommée
export { firebaseApp };

// Ceci est l'exportation par défaut
export default base;
