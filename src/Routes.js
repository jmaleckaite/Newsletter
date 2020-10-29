import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './utils/history';
import Unsub from './Unsub';
import Unsubscribe from './Unsubscribe';

export default class Routes extends Component {
render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/Unsub" component={Unsub}/>
                <Route path="/Unsubscribe" component={Unsubscribe}/>}
            </Switch>
        </Router>
    )
}
}
