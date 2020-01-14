import React from "react";

const Card = ({ details }) => {
	const ingredients = details.ingredients
		// formater les données en tableau découper au niveau de la virgule et \n et mapper chaque item pour présenter une liste
		.split(',')
		.map(item => <li key={item}>{item}</li>);
	
	const instructions = details.instructions
		.split("\n")
		.map(item => <li key={item}>{item}</li>);
	
	// Prevision d'une image par défaut si erreur de saisie dans le nom de l'image

	const requireImage = chemin => {
		try {
			return require(`../img/${chemin}`)
		} catch (err) {
			return require(`../img/default.jpeg`)
		}
	};

	return (
		<div className="card">
			<div className="image">
				{/* require = un import pour que web pack gère les images */}
				<img
					src={requireImage(details.image)}
					alt={details.nom}
				/>
			</div>
			<div className="recette">
				<h2>{details.nom}</h2>
				<ul className="liste-ingredients">{ingredients}</ul>
				<ol className="liste-instructions">{instructions}</ol>
			</div>
		</div>
	);
};

export default Card;
