import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Form from './components/Form';
import NavBar from './components/NavBar';
import MenuList from './components/MenuList';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import InfoModal from './components/InfoModal';
import Accounts from './components/Accounts';

ReactDOM.render(
  <Router>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={ Accounts }/>
        <Route path='/home' component={ Home }/>
        <Route path='/add' component={ Form }/>
        <Route path='/info' component={ InfoModal }/>
        <Route path='/menu' component={ MenuList }/>
        <Route path='/signup' component={ SignUp }/>
        <Route path='/login' component={ LogIn }/>
      </Switch>
    </BaseLayout>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
