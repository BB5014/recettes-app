import React, { Component } from "react";
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";

class Admin extends Component {
	render() {
		// Destructuring pour simplifier l'écriture du this.props
		const {
			recettes,
			ajouterRecette,
			majRecette,
			supprimerRecette,
			chargerExemple
		} = this.props;
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
					>					
					</AdminForm>
				))}
				<footer>
					<button onClick={chargerExemple}>Remplir</button>
				</footer>
			</div>
		);
	}
}

export default Admin;
