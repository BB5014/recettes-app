import React from "react";

const Header = ({ pseudo }) => {
	//Permettre l'utilisation du d' devant les voyelles à l'aide de regex
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    console.log(formatPseudo(pseudo))
	return (
		<header>
            <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
		</header>
	);
};

export default Header;
