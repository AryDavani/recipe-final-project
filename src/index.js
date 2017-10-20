import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import BaseLayout from './components/BaseLayout';
import MenuContainer from './container/MenuContainer';
import SignupContainer from './container/SignupContainer';
import LoginContainer from './container/LoginContainer';
import FormContainer from './container/FormContainer';
import Dashboard from './container/Dashboard';

import authRequired from './actions/actions';
import PROJECT_URI from './utility';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={ PROJECT_URI + '/' } component={ LandingPage }/>
      <Route path={ PROJECT_URI + '/home' } component={ authRequired(Dashboard) }/>
      <Route path={ PROJECT_URI + '/menu' } component={ authRequired(MenuContainer) }/>
      <Route path={ PROJECT_URI + '/form'} component={ FormContainer }/>
      <Route path={ PROJECT_URI + '/signup' } component={ SignupContainer }/>
      <Route path={ PROJECT_URI + '/login' } component={ LoginContainer }/>
    </Switch>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
