import React from "react";

const AdminForm = ({ id: key, majRecette, recettes, supprimerRecette }) => {
	// Crée const recette pour savoir dans quelle recette je suis
	const recette = recettes[key];

	const handleChange = (event, key) => {
		// Récupération du nom et de la valeur
		const { name, value } = event.target;
		// Création copie d'une recette
		const recette = recettes[key];
		// Sur la copie, Je lui donne la valeur de la modification
		recette[name] = value;
		// Prend le state dans App.js, il prend la clé, la recette et la met à jour
		majRecette(key, recette);
	};
	return (
		<div className="card">
			<form className="admin-form">
				<input
					value={recette.nom}
					onChange={e => handleChange(e, key)}
					type="text"
					name="nom"
					placeholder="Nom de la recette"
				/>
				<input
					value={recette.image}
					onChange={e => handleChange(e, key)}
					type="text"
					name="image"
					placeholder="Adresse de l'image"
				/>
				<textarea
					value={recette.ingredients}
					onChange={e => handleChange(e, key)}
					name="ingredients"
					rows="3"
					placeholder="Liste des ingrédients"
				/>
				<textarea
					value={recette.instructions}
					onChange={e => handleChange(e, key)}
					name="instructions"
					rows="15"
					placeholder="Liste des instructions"
				/>
			</form>
			{/* Utilise  fonction fléchée pour lancer fonction uniquement au click pour passer l'argument et non à chaque chargement de page*/}
			<button onClick={() => supprimerRecette(key)}>Supprimer</button>
		</div>
	);
};

export default AdminForm;
