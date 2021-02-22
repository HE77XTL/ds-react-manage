import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {ConfigProvider} from 'antd'
import {connect} from "react-redux";

import '../assets/css/index.less'

import Home from '../views/home/home'
import Login from '../views/login/login'

const mapStateToProps = state => {
    return {
        languageType: state.languageType,
    }
};

const APP = function ({languageType}) {
    return (
        <ConfigProvider locale={languageType.antDesign}>
            <Router>
                <Switch>
                    <Route path="/login"><Login/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
            </Router>
        </ConfigProvider>
    );
};
export default connect(mapStateToProps)(APP)


