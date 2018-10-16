import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter,routerReducer,routerMiddleware } from  'react-router-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createHistory();

ReactDOM.render(
    <Router>
        <App className="flex-container"/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
