import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import { PARSE_URL, PARSE_HEADERS } from '../parse';

let $ = window.$;


export default class LoginContainer extends Component {
  constructor() {
    super();

    this.state = {
      errorMsg: ''
    }
  }

  _handleLoginForm = (qs) => {

    fetch(`${PARSE_URL}/login?${qs}`, { headers: PARSE_HEADERS })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log("user", user);

      localStorage.setItem('user', JSON.stringify(user));

      // --- if trying to log in with wrong user/pass
      // --- don't set session or set state
      if (user.username) {
        // --- setting session token to header for new headers
        PARSE_HEADERS['X-Parse-Session-Token'] = user.sessionToken;
        this.props.history.push('/home');
      } else {
        this.setState({errorMsg: user.error})
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    return (
      <LoginForm handleLoginForm={ this._handleLoginForm } errorMsg={ this.state.errorMsg }/>
    )
  }
}
