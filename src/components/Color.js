import React, { Component } from "react";

// Creation du  Context
const ColorContext = React.createContext();

//Provider est un peu un HOC qui enveloppe où on veut que notre contexte soit dispo
class ColorProvider extends Component {
	// state du choix de couleur par utilisateur
	state = {
		color: "seagreen"
	};

	render() {
		return (
			// Définition de qui va fournir le context
            <ColorContext.Provider
                value={{
                    state: this.state
                }}>
				{/* Tous les composants rendus ici  */}
				{this.props.children}
			</ColorContext.Provider>
		);
	}
};

// Export pour avoir context quand on veut le Consummer
export { ColorContext };

export default ColorProvider;
