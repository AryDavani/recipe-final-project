import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import MenuContainer from './container/MenuContainer';
import SignupContainer from './container/SignupContainer';
import LoginContainer from './container/LoginContainer';
import FormContainer from './container/FormContainer';
import BaseLayout from './components/BaseLayout';

import authRequired from './actions/actions';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={ LandingPage }/>
      <Route path='/home' component={ authRequired(FormContainer) }/>
      <Route path='/menu' component={ MenuContainer }/>
      <Route path='/signup' component={ SignupContainer }/>
      <Route path='/login' component={ LoginContainer }/>
    </Switch>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
