import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Parent from './pages/props/Parent';
import Mother from './pages/props/Mother';
import modalButton from './pages/compare/modalButton';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/parent' component={Parent}></Route>
                <Route exact path='/mother' component={Mother}></Route>
                <Route exact path='/modal' component={modalButton}></Route>
            </Switch>
        </Router>
    );
};

export default Routes;
