import React, { Component } from 'react';
import './styles.css';
import './Unsubscribe.js';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Modal, Message, Checkbox, Form } from 'semantic-ui-react';
import Unsubscribe from './Unsubscribe';

class Unsub extends React.Component {
	
	//load the first page in first app
	render() {
		return (
		<div className="unsubscribe">
		<Form riuscita>
		<Header as='h1'>La tua iscrizione è riuscita</Header>
		<Header.Subheader>Ti sei iscritto a: </Header.Subheader>
		<div></div> 
		<Header as='h3'>Se non vuoi ricevere newsletter</Header>
		<BrowserRouter>
		  <Button as={ Link } to='/Unsubscribe'>clicca qui</Button>
		  <Switch>
		<Route path="/Unsubscribe">
		<Unsubscribe />
		</Route>
		</Switch>
		  </BrowserRouter>
		</Form>
		</div>
		
		
		);
	}
}

export default Unsub;
	
	
