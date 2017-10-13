import React, {Component} from 'react';
import Modal from 'react-modal';
import SignupForm from '../components/SignupForm';
import { PARSE_URL, PARSE_HEADERS } from '../parse';


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
      localStorage.setItem('user', JSON.stringify(user));
      this.props.history.push('/login');
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
