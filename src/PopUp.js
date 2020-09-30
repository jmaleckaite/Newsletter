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
            <div className="popUpHeader">
			<h3>ISCRIZIONE ALLE NEWSLETTER</h3>
			</div>
			</label>
			<label>
			<div className="listOfChannels">Le Notizie del Portale<input type="checkbox" /></div>
			<hr class="solid"></hr>
			<div className="listOfChannels">Gli eventi e le Notizie della Cultura
			<input type="checkbox" /></div>
			<hr class="solid"></hr>
			<div className="listOfChannels">Gli eventi e le Notizie del centro per le famiglie
			<input type="checkbox" /></div>
			<hr class="solid"></hr>
			<div class='submitWrapper'>   
			<input id="partitioned" type="submit" value="Subscribe"/>
			</div>
			</label>
          </form>
        </div>
      </div>
    );
  }
}