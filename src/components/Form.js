import React, { Component } from 'react';
import Modal from 'react-modal';
import NutritionTable from './NutritionTable';
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

  _handleFormSubmit = (e) => {
    e.preventDefault();

    let object = {
      query: this.state.recipe
    }

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(object),
      headers: API_HEADERS
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        nutrition: data.foods,
        render: true
      })
      console.log('form submit', this.state);
    });
  }

  _handleChange = (e) => {
    this.setState({
      recipe: e.target.value
    });
    console.log("handle change", this.state.recipe);
  }

  render(){

    let nutritionInfo = this.state.nutrition.map((item, index) => {
      return <NutritionTable key={ index } item={ item } />
    });

    return (
      <Modal isOpen={ true }>
        <div className="row col-md-6">
          <form className="" onSubmit={ this._handleFormSubmit }>
            <div className="form-group">
              <h3>Enter a recipe below</h3>
              <textarea onChange={ this._handleChange } name="recipe" className="form-control" rows="10" value={ this.state.recipe }></textarea>
              <br/>
              <button disabled={ !this.state.recipe } type="submit" className="btn btn-default btn-lg">Calculate Foods</button>
            </div>
          </form>
          <div className="">
            { this.state.render ?
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Food</th>
                    <th>Calories</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  { nutritionInfo }
                </tbody>
              </table>
            : null }
          </div>
        </div>
      </Modal>
    )
  }
}
