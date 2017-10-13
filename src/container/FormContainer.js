import React, { Component } from 'react';
import Modal from 'react-modal';
import NutritionTable from '../components/NutritionTable';
import Form from '../components/Form';
import {API_URL, API_HEADERS} from '../parse';

export default class FormContainer extends Component {
  constructor(){
    super();

    this.state = {
      recipe: '',
      title: '',
      nutrition: []
    }
  }

  _handleFormSubmit = (item) => {

    let object = {
      query: this.state.recipe
    }

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(item),
      headers: API_HEADERS
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        nutrition: data.foods,
        render: true
      })
    });
  }

  render(){

    return(
      <div>
        <Form handleFormSubmit={ this._handleFormSubmit } state={ this.state }/>
      </div>
    );
  }
}
