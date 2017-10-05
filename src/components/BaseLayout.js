import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import NutritionLabel from './NutritionLabel';
import NavBar from './NavBar';

export default function BaseLayout() {
  return (
    <Router>
      <NavBar >
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/add' component={ Form }/>
          <Route path='/nutrition' component={ NutritionLabel }/>
        </Switch>
      </NavBar>
    </Router>
  )
}
