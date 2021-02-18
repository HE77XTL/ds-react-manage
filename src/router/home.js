import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import ReduxExample from '../views/reduxExample/reduxExample'
import About from '../views/about/about'

const HomeRouter = function () {
    return (
        <Router>
            <Switch>
                <Route path="/reduxExample"><ReduxExample/></Route>
                <Route path="/about"><About/></Route>
            </Switch>
        </Router>
    );
};

export default HomeRouter
