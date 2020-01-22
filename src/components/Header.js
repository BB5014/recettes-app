import React from "react";
import { ColorContext } from "./Color";

const Header = ({ pseudo }) => {
	//Permettre l'utilisation du d' devant les voyelles à l'aide de regex
	const formatPseudo = pseudo =>
		/[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

	return (
		// Utilisation du Consumer pour changer la couleur du header
		// On rend une fonction fléchée + JSX
		// On passe du CSS inline
		// Attention, ne pas mettre de ";" avant ou après le dernier Color.Context.Consumer, au risque d'avoir une erreur
		<ColorContext.Consumer>
			{context => (
				<header style={{ backgroundColor: context.state.color }}>
					<h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
				</header>
			)}
		</ColorContext.Consumer>
	);
};

export default Header;
