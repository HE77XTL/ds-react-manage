import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index'
import './i18n';
import reportWebVitals from './reportWebVitals';
import {createLogger} from 'redux-logger';

import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

import AppRedux from './reducers/index'

const logger = createLogger();

const store = createStore(AppRedux, applyMiddleware(ReduxThunk, logger))


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
