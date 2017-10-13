import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import MenuContainer from './container/MenuContainer';
import SignupContainer from './container/SignupContainer';
import LoginContainer from './container/LoginContainer';
import FormContainer from './container/FormContainer';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/add' component={ FormContainer }/>
      <Route path='/menu' component={ MenuContainer }/>
      <Route path='/signup' component={ SignupContainer }/>
      <Route path='/login' component={ LoginContainer }/>
      {/* <Redirect path='/' /> */}
    </Switch>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
