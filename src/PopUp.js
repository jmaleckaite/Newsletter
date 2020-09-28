/**
import React, { Component } from 'react';

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
		<h3>ISCRIZIONE ALLE NEWSLETTER</h3>
		<ol>
		<li>Le Notizie del Portale</li>
		<li>Gli eventi e le Notizie della Cultura</li>
		<li>Gli eventi e le Notizie del centro per le famiglie</li>
		</ol>
		<br />
		<input type="submit" />
		</form>
		</div>
		</div>
		);
	}
}
**/

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
            /** <label>
             <ol>
			 <li>Le Notizie del Portale <input type="checkbox" /></li>
			 <li>Gli eventi e le Notizie della Cultura <input type="checkbox" /></li>
			 <li>Gli eventi e le Notizie del centro per le famiglie <input type="checkbox" /></li>
			 </ol>
            </label>
			
            <br /> **/
			<label>
			<span>Le Notizie del Portale</span>
			<input type="checkbox" />
			<span>Gli eventi e le Notizie della Cultura</span>
			<input type="checkbox" />
			<span>Gli eventi e le Notizie del centro per le famiglie</span>
			<input type="checkbox" />
            <input type="submit" value="Subscribe"/>
			</label>
          </form>
        </div>
      </div>
    );
  }
}


