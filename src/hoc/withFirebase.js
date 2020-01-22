import React, { Component } from "react";
import recettes from "../recettes";

//Firebase
import base from "../base";

const withFirebase = WrappedComponent =>
	class HOC extends Component {
		state = {
			pseudo: this.props.match.params.pseudo,
			recettes: {}
		};

		// synchronisation à Firebase au moment où mon composant est chargé

		componentDidMount() {
			this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
				context: this,
				state: "recettes"
			});
		};

		// terminer synchronisation avant de changer de page pour ne pas écraser les informations qui ne nous appatiennent pas

		componentWillUMount() {
			base.removeBinding(this.ref);
		};

		// Ajout d'un recette globale

		ajouterRecette = recette => {
			const recettes = { ...this.state.recettes };
			// donner un identifiant unique avec Date.now
			recettes[`recette-${Date.now()}`] = recette;
			this.setState({ recettes });
		};
		// mise à jour recette point par point

		majRecette = (key, newRecette) => {
			const recettes = { ...this.state.recettes };
			recettes[key] = newRecette;
			this.setState({ recettes });
		};

		supprimerRecette = key => {
			const recettes = { ...this.state.recettes };
			recettes[key] = null;
			this.setState({ recettes });
		};

		// Remplir state des recettes
		chargerExemple = () => this.setState({ recettes });

		render() {
			return (
				<WrappedComponent
					recettes={this.state.recettes}
					ajouterRecette={this.ajouterRecette}
					majRecette={this.recette}
					supprimerRecette={this.recette}
					chargerExemple={this.recette}
					{...this.props}
				/>
			);
		}
	};

export default withFirebase;
