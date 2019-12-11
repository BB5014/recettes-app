import React, { Component } from "react";

import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";

// CSS
import "./App.css";

class App extends Component {
	state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };
  
  // Remplir state des recettes
  chargerExemple = () => this.setState({ recettes });

	render() {
		return (
      <div className="box">
      
				<Header pseudo={this.state.pseudo}></Header> 
				<div className="cards">
					<div className="card">
						<h2>Une Carte</h2>
					</div>
        </div>
        <Admin chargerExemple={this.chargerExemple}></Admin>
			</div>
		);
	}
}

export default App;
