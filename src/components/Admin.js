import React, { Component } from "react";
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";
import Login from "./Login";

import firebase from "firebase/app";
import "firebase/auth";
import base, { firebaseApp } from "../base";

class Admin extends Component {
	state = {
		// correspond de la personne connectée : identifiant unique
		uid: null,
		// correspond au propriétaire de la page
		chef: null
	};

	// Permette connection persistante : appeler handleAuth au moment de l'identification
	componentDidMount() {
		// Sur l'utilisateur quand il y a un changement, passer fonction user ; Si il y a un utilisateur Firebase lance notre propre système d'identificaion
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.handleAuth({ user })
			}
		});
	};

	//Asynch permet d'utiliser  await = ne passe pas à la suite tant que la tâche pas finie
	handleAuth = async authData => {
		// Récupérer info dans base de données
		const box = await base.fetch(this.props.pseudo, { context: this });

		if (!box.chef) {
			await base.post(`${this.props.pseudo}/chef`, {
				data: authData.user.uid
			});
		}
		this.setState({
			uid: authData.user.uid,
			chef: box.chef || authData.user.uid
		});
	};

	// Se connecter via Firebase
	authenticate = () => {
		const authProvider = new firebase.auth.FacebookAuthProvider();
		// On se connecte via
		firebaseApp
			// appeler fonction auth :
			.auth()
			// Ouvre pop up
			.signInWithPopup(authProvider)
			.then(this.handleAuth);
	};

	// Déconnexion
	logout = async () => {
		console.log("Déconnexion");
		await firebase.auth().signOut();
		this.setState({ uid: null });
	};

	render() {
		// Destructuring pour simplifier l'écriture du this.props
		const {
			recettes,
			ajouterRecette,
			majRecette,
			supprimerRecette,
			chargerExemple
		} = this.props;

		const logout = <button onClick={this.logout}>Déconnexion</button>
		
		// Si utilisateur n'est pas connecté
		if (!this.state.uid) {
			return <Login authenticate={this.authenticate} />;
		}
		// Si l'utilisateur connecté n'est pas le chef de la boîte
		if (this.state.uid !== this.state.chef) {
			return (
				<div>
					<p>Tu n'es pas le chef de cette boîte !</p>
					{logout}
				</div>
			);
		}

		return (
			<div className="cards">
				<AjouterRecette ajouterRecette={ajouterRecette} />
				{Object.keys(recettes).map(key => (
					<AdminForm
						key={key}
						// Ne peut pas utiliser key comme props, donc prend un id qui prend key pour y accéder et savoir à quelle partie du formulaire correspond l'ajout
						id={key}
						majRecette={majRecette}
						supprimerRecette={supprimerRecette}
						recettes={recettes}
					></AdminForm>
				))}
				<footer>
					{logout}
					<button onClick={chargerExemple}>Remplir</button>
				</footer>
			</div>
		);
	}
}

export default Admin;
