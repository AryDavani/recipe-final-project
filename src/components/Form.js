import React, { Component } from 'react';
import Modal from 'react-modal';
import modalStyle from '../styles/modal';
import NutritionLabel from './NutritionLabel';
import {URL, HEADERS} from '../parse';

export default class Form extends Component {
  constructor(){
    super();

    this.state = {
      recipe: '',
      nutrition: [],
      render: false
    }
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();

    let object = {
      query: this.state.recipe
    }

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(object),
      headers: HEADERS
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        nutrition: data.foods,
        render: true
      })
      console.log('state', this.state);
    });

  }

  _handleChange = (e) => {
    this.setState({
      recipe: e.target.value
    });
    console.log(this.state.recipe);
  }

  render(){
    console.log('STATE', this.state);

    let nutritionInfo = this.state.nutrition.map((item, index) => {
      return <NutritionLabel key={ index } item={ item } />
    });


    return (
      <div className="background">
        <Modal isOpen={ true } >
          <form className="row" onSubmit={ this._handleFormSubmit }>
            <div className="form-group col-md-6">
              <h3>Paste a recipe below</h3>
              <textarea onChange={ this._handleChange } name="recipe" className="form-control" rows="10" value={ this.state.recipe }></textarea>
              <br/>
              <button disabled={ !this.state.recipe } type="submit" className="btn btn-default btn-lg">Calculate Foods</button>
            </div>
          </form>
          <div className="col-md-6">
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

        </Modal>
      </div>
    )
  }
}
