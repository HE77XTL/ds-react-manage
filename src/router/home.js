import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import About from '../views/about/about'
import Dashboard from '../views/dashboard/dashboard'
import ReduxExample from '../views/reduxExample/reduxExample'
import ExampleForm from '../views/example/exampleForm'
import ExampleTable from '../views/example/exampleTable'
import ExampleSub from '../views/example/exampleSub'

const HomeRouter = function () {
    return (
        <Router>
            <Switch>
                <Route path="/about"><About/></Route>
                <Route path="/dashboard"><Dashboard/></Route>
                <Route path="/example/reduxExample"><ReduxExample/></Route>
                <Route path="/example/exampleForm"><ExampleForm/></Route>
                <Route path="/example/exampleTable"><ExampleTable/></Route>
                <Route path="/example/exampleSub"><ExampleSub/></Route>
            </Switch>
        </Router>
    );
};

export default HomeRouter


