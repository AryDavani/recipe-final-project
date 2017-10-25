import React, {Component} from 'react';
import SignupForm from '../components/SignupForm';
import { PARSE_URL, PARSE_HEADERS } from '../parse';
import PROJECT_URI from '../utility';


export default class SignupContainer extends Component {
  constructor() {
    super();
  }

  _handleSignupForm = (user) => {

    fetch(`${PARSE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: PARSE_HEADERS
    })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log('user', user);
      // localStorage.setItem('user', JSON.stringify(user));
      this.props.history.push(PROJECT_URI + '/login');
    })
    .catch((err) => {
      console.log('error', err);
    })
  }

  render(){
    return (
      <SignupForm handleSignupForm={ this._handleSignupForm } />
    )
  }
}
