import React, { Component } from "react";
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image, Input } from 'semantic-ui-react';


interface IState {
	ch1: boolean;
	ch2: boolean;
	ch3: boolean;
}

class Unsubscribe extends Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			ch1: false,
			ch2: false,
			ch3: false
		};
	} 
	
	checkboxChangeHandler = (event: React.FormEvent<HTMLInputElement>, data) => {
	const value = data.checked;
	console.log(data);
	this.setState({ [data.name]: data.checked });
	console.log(value);
	};
	
		handleSubmit = e => {
		alert('Form submitted');
		e.preventDefault();
		console.log(this.state);
		}
	
	render() {
		const {
			ch1,
			ch2, 
			ch3
		} = this.state
		
		return (
		<Form onSubmit={this.handleSubmit}>
		<Header as='h3'>Seleziona le newsletter a cui desideri annullare l'iscrizione</Header>
		<div className="grouped fields">
		<Form.Field>
	    <div className="field">
	    <div className="ui checkbox">  
		<Checkbox
		label="Le Notizie del Portale"
		name="ch1"
		checked={this.state.ch1}
		onChange={this.checkboxChangeHandler}
		/>
		</div>
		</div>
		</Form.Field>
		<Form.Field>
		<div className="field">
		<div className="ui checkbox">
		<Checkbox
		 label="Gli eventi e le Notizie della Cultura"
		 name="ch2"
		 checked={this.state.ch2}
		 onChange={this.checkboxChangeHandler}
		 />
		 </div>
		 </div>
		 </Form.Field>
		 <Form.Field>
		 <div className="field">
		 <div className="ui checkbox">
		 <Checkbox
		  label="Gli eventi e le notizie del centro per le famiglie"
		  name="ch3"
		  checked={this.state.ch3}
		  onChange={this.checkboxChangeHandler}
		  />
		  </div>
		  </div>
		  </Form.Field>
		  </div>
		  <div class='submitWrapper'>   
			<Form.Button type='submit' color='blue'>Unsubscribe</Form.Button>
			</div>
			</Form>
			);
	}
}

export default Unsubscribe;