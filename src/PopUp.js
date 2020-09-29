import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
		  <label>
            <h3>ISCRIZIONE ALLE NEWSLETTER</h3>
			</label>
			<label>
			<div className="listOfChannels">Le Notizie del Portale<input type="checkbox" /></div>
			<div className="listOfChannels">Gli eventi e le Notizie della Cultura
			<input type="checkbox" /></div>
			<div className="listOfChannels">Gli eventi e le Notizie del centro per le famiglie
			<input type="checkbox" /></div>
            <input id="partitioned" type="submit" value="Subscribe"/>
			</label>
          </form>
        </div>
      </div>
    );
  }
}