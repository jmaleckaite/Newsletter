import React from "react";

class Unsubscribe extends Component {
	render() {
		return (
		<div className="modal">
		<div className="Title"><h3>Seleziona le newsletter a cui desideri annullare l'iscrizione</h3></div>
		<form>
		<label>
		<div className="listOfChannels">Le Notizie del Portale<input type="checkbox" /></div>
		</label>
		<label>
		<div className="listOfChannels">Gli eventi e le Notizie della Cultura<input type="checkbox" /></div>
		</label>
		<label>
		<div className="listOfChannels">Gli eventi e le Notizie del centro per le famiglie<input type="checkbox" /></div>
		</label>
		<label>
		<div class='submitWrapper'>   
			<input id="partitioned" type="submit" value="Unsubscribe"/>
			</div>
			</label>
			</form>
			</div>
			);
	}
}