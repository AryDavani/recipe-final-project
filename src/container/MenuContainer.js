import React, { Component } from 'react';
import BaseLayout from '../components/BaseLayout';
import Menu from '../components/Menu';
import {PARSE_URL, PARSE_HEADERS} from '../parse';

export default class MenuContainer extends Component {
  constructor() {
    super();

    this.state = {
      menuItems: [],
      user: JSON.parse(localStorage.getItem('user'))
    }
  }

  componentDidMount = () => {
      // Building pointer per user to pull specific posts on logged in user
      let pointer = {
        "__type":"Pointer",
        "className":"_User",
        "objectId": JSON.parse(localStorage.getItem('user'))
      };

      // fetching user's posts
      fetch(PARSE_URL + '/classes/menuItems/?where={"user":' + JSON.stringify(pointer) + '}', {
        headers: PARSE_HEADERS
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log('data from server: ', data.results);
        this.setState({menuItems: data.results})
      })
  }

  render(){
    return(
      <BaseLayout>
        <Menu menuItems={ this.state.menuItems }/>
      </BaseLayout>
    )
  }
}
