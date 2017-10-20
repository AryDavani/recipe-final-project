import React, { Component } from 'react';
import BaseLayout from '../components/BaseLayout';
import Menu from '../components/Menu';
import CrudList from '../components/CrudList';
import {PARSE_URL, PARSE_HEADERS} from '../parse';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      menuItems: [],
      user: {}
    }
  }

  componentWillMount = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    this.setState({
      user: user
    });

    // Building pointer per user to pull specific posts on logged in user
    let pointer = {
      "__type":"Pointer",
      "className":"_User",
      "objectId": user.objectId
    };

    // fetching user's posts
    fetch(PARSE_URL + '/classes/menuItems/?where={"owner":' + JSON.stringify(pointer) + '}', {
      headers: PARSE_HEADERS
    }).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({menuItems: data.results})
    })
  }

  _handleDelete = (item) => {
    console.log('handle delete', item);

    // fetch(`${PARSE_URL}/classes/menuItems`, {
    //   method: 'DELETE',
    //   body: JSON.stringify(item),
    //   headers: PARSE_HEADERS
    // }).then((resp) => {
    //   return resp.json();
    // }).then((message) => {
    //   console.log('message', message);
    // });

  }

  render(){
    console.log('render state', this.state);
    return(
      <BaseLayout>
        <CrudList menuItems={ this.state.menuItems } handleDelete={ this._handleDelete }/>
      </BaseLayout>
    )
  }
}
