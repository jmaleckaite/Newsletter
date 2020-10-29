import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, Segment } from 'semantic-ui-react';
import { Link, BrowserRouter, Switch, Route, Router, useHistory, Redirect } from 'react-router-dom';
import Unsubscribe from './Unsubscribe';
import history from './utils/history';
import Unsub from './Unsub';

//add a submit handler

interface IState {
	ch1: boolean;
	ch2: boolean;
	ch3: boolean;
}
	class PopUp extends React.Component<{}, IState> {
      constructor(props: any) {
		  super(props);
		  this.state = {
			  ch1: false,
			  ch2: false,
		      ch3: false,
			  showModal: false,
			  redirect: false
		  };
	  }

	
	  redirectHandler = () => {
		  this.setState({ redirect: true })
		  this.renderRedirect();
	  }

	  renderRedirect = () => {
		  if (this.state.redirect) {
			  return <Redirect to='/Unsub' />
		  }
	  }

	 
	  
	  handleCreateButton(evt) {
		  evt.preventDefault()
		  this.closeModal();
		  
		  
	  }


	  
	  closeModal = () => {
		  this.setState({ showModal: false })
	  }
	  

	  checkboxChangeHandler = (event: React.FormEvent<HTMLInputElement>, data) => {
		  const value = data.checked;
		  console.log(data);
		  this.setState({ [data.name]: data.checked });
		  console.log(value);
	  }; 
	  
	  	  /**
	  checkboxChangeHandler = () => {
		  this.setState((prevState) => ({ [data.name]: !prevState[data.name] }))
	  };
	  **/
	  
	  render() {
		  const {
			  ch1,
			  ch2, 
			  ch3,
			  showModal
		  } = this.state
		  
		  return (
		  <div className="ui container center aligned">
		  <Modal closeIcon onClose={this.closeModal} open={showModal} size='large' trigger={<Button onClick={() => this.setState({ showModal: true })} color='blue'><Icon className='paper plane outline' />Subscribe</Button>}>
		  <Modal.Header>ISCRIZIONE ALLE NEWSLETTER</Modal.Header>
		  <Modal.Content>
		  <Form>
		  <div className="grouped fields">
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
		  </div>
		  <Modal.Actions>
		  <Message
      visible
      content="Select your prefered newsletters"
    />
	      
		  
		  <Router history={history}>
			  <Switch>
			  <Route path="/" exact>
			  <Button color='blue' type='submit' onClick={() => {history.push("/Unsub");}}>Subscribe</Button>
			  </Route>
			  </Switch>
          <Route path="/unsub">
	      <Unsub />
          </Route>
		  </Router>
		  
		  </Modal.Actions>
		  </Form>
		  </Modal.Content>
		  </Modal>
		  </div>
		  );
	  }
	}

	
			
	

		  
	  
	  

	


export default PopUp
	


