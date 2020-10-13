import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Modal, Message, Checkbox } from 'semantic-ui-react';


/**
interface IState {
	ch1: boolean;
	ch2: boolean;
	ch3: boolean;
}

 
  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
  }
  
  function handleCheck(e) {
	  console.log("test", e);
  };
  
export default class PopUp extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			ch1: true,
			ch2: true,
			ch3: true
		};
	}
	
	checkboxChangeHandler = (event: React.FormEvent<HTMLInputElement>, data) => {
		const value = data.checked;
		console.log(data);
		this.setState({ [data.name]: data.checked });
		console.log(value);
	};
	
	render() {**/
	function PopUp() {
		
		const [open, setOpen, saved, setSaved] = React.useState(false);
		const [ch1, ch2, ch3] = useState(false); //use boolean value
		
		//add a state checked false, and user click events
		const state = { checked: false }
		

		function onChangeCheckbox(data) {
			let checked = data.checked;
			console.log(checked);
		}
		
		function handleSubmit(e) {
			e.preventDefault();
			setSaved(true);
		}
		
		
	
		
    return (
	<div className="wrapper">
	 <Modal
      closeIcon
      open={open}
      trigger={<Button color='blue' style={{position: "center"}} >Subscribe</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
	  onSubmit={e => handleSubmit(e)}
	  size='small'
    >
      <Header content='ISCRIZIONE ALLE NEWSLETTER' />
      <Modal.Content>
       <div className="grouped fields">
	   <div className="field">
	   <div className="ui checkbox">
      <Checkbox
	  label="Le Notizie del Portale"
	  value="ch1"
      checked = {ch1}
	  //onClick={(data)=>this.onChangeCheckbox(ch1)}
	  />
    </div>
	</div>
	 <div className="field">
	<div className="ui checkbox">
      <Checkbox
	  label="Gli eventi e le Notizie della Cultura"
	  name="ch2"
	  checked = {ch2}
	  onClick={(data)=>this.onChangeCheckbox(ch2)}
	  />
    </div>
	</div>
	 <div className="field">
	<div className="ui checkbox">
      <Checkbox 
	  label="Gli eventi e le notizie del centro per le famiglie"
      name="ch3"
	  checked = {ch3}
	  onClick={(data)=>this.onChangeCheckbox(ch3)}
	  />
    </div>
	</div>
	</div>
      </Modal.Content>
      <Modal.Actions>
	    <Message
      visible
      content="Select your prefered newsletters"
    />
        <Button color='blue' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Subscribe
        </Button>
		 <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='x' /> Anulla
        </Button>
      </Modal.Actions>
    </Modal>
	</div>
  );
}

export default PopUp
	


