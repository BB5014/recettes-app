import React, { Component } from "react";

import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";
import Card from "./components/Card";

// CSS
import "./App.css";

//Firebase
import base from './base';

class App extends Component {
	state = {
		pseudo: this.props.match.params.pseudo,
		recettes: {}
	};

	// synchronisation à Firebase au moment où mon composant est chargé
	
	componentDidMount() {
		this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
			context: this,
			state: "recettes"
		})
	};

	// terminer synchronisation avant de changer de page pour ne pas écraser les informations qui ne nous appatiennent pas

	componentWillMount() {
		base.removeBinding(this.ref)
	};


	// Remplir state des recettes
	chargerExemple = () => this.setState({ recettes });

	render() {
		const cards = Object.keys(this.state.recettes).map(key => (
			<Card key={key} details={this.state.recettes[key]} />
		));
		console.log(cards);
		return (
			<div className="box">
				<Header pseudo={this.state.pseudo} />
				<div className="cards">{cards}</div>
				<Admin chargerExemple={this.chargerExemple} />
			</div>
		);
	}
}

export default App;
