import React, {Component} from 'react';
import Modal from 'react-modal';
import LoginForm from '../components/LoginForm';
import { PARSE_URL, PARSE_HEADERS } from '../parse';

let $ = window.$;


export default class LoginContainer extends Component {
  constructor() {
    super();
  }

  _handleLoginForm = (qs) => {
    console.log('qs', qs);

    fetch(`${PARSE_URL}/login?${qs}`, { headers: PARSE_HEADERS })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log("login submitted", user);
      localStorage.setItem('user', JSON.stringify(user));
      this.props.history.push('/home');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    return (
      <LoginForm handleLoginForm={ this._handleLoginForm } />
    )
  }
}
