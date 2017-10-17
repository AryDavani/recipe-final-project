import React, { Component } from 'react';


export default function authRequired(ComposedComponent){
  console.log('auth required called');
  class Authentication extends Component{
    isLoggedIn(){
      console.log('function running');
      let user = localStorage.getItem('user');

      if(!user){
        console.log('returned false');
        return false;
      }

      var currentUser = JSON.parse(user);
      return currentUser.sessionToken;
    }

    componentWillMount(){
      console.log('Is Logged In: ', this.isLoggedIn());
      !this.isLoggedIn() ? this.props.history.push('/login') : null;
    }

    render(){
      console.log('testing render return');
      return this.isLoggedIn() ? <ComposedComponent {...this.props} /> : null;
    }
  }

  return Authentication;
}
