import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Modal, Message } from 'semantic-ui-react';

function PopUp() {
  const [open, setOpen, saved, setSaved] = React.useState(false)
 
  
  function handleSubmit(e) {
    e.preventDefault();

    setSaved(true);
  }

    return (
	 <Modal
      closeIcon
      open={open}
      trigger={<Button color='blue'>Subscribe</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
	  onSubmit={e => handleSubmit(e)}
    >
      <Header content='ISCRIZIONE ALLE NEWSLETTER' />
      <Modal.Content>
       <div class="grouped fields">
	   <div class="field">
	   <div class="ui checkbox">
      <input type="checkbox"/>
      <label>Le Notizie del Portale</label>
    </div>
	</div>
	 <div class="field">
	<div class="ui checkbox">
      <input type="checkbox" change="{!c.onCheck}"/>
      <label>Gli eventi e le Notizie della Cultura</label>
    </div>
	</div>
	 <div class="field">
	<div class="ui checkbox">
      <input type="checkbox" change="{!c.onCheck}"/>
      <label>Gli eventi e le notizie del centro per le famiglie</label>
    </div>
	</div>
	</div>
      </Modal.Content>
      <Modal.Actions>
	    <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
        <Button color='blue' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Subscribe
        </Button>
		 <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='x iconx' /> Anulla
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default PopUp