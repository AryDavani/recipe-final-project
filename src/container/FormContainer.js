import React, { Component } from 'react';
import Modal from 'react-modal';
import NutritionTable from '../components/NutritionTable';
import {API_URL, API_HEADERS} from '../parse';

export default class Form extends Component {
  constructor(){
    super();

    this.state = {
      recipe: '',
      title: '',
      nutrition: []
    }
  }
  render(){
    return(
      <div>

      </div>
    );
  }
}
