import React from "react";
import PopUp from "./PopUp";
import 'semantic-ui-css/semantic.min.css';
import PopUp from './PopUp';



export default class App extends React.Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  


  render() {
    return (
      <div>
        <div className="buton" onClick={this.togglePop}>
          <button class="ui primary button">Subscribe</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}




