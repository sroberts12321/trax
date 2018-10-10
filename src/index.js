import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory'
import LandingPage from './components/Landing';
import Home from './components/Home';
import AccountCreation from './components/AccountCreation';
import Characters from './components/Characters';

const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/accountcreation' component={AccountCreation} />
                <Route exact path='/characters' component={Characters} />
            </Switch>
        </App>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
