import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from './pages/Grid';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Grid} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
