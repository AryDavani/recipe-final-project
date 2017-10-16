import React, { Component } from 'react';
import Modal from 'react-modal';
import NutritionTable from './NutritionTable';
import {NavLink} from 'react-router-dom';
import {API_URL, API_HEADERS} from '../parse';

export default class Form extends Component {
  constructor(){
    super();

    this.state = {
      recipe: ''
    }
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();
    let item = { query: this.state.recipe };

    this.props.handleFormSubmit(item);
  }

  _handleChange = (e) => {
    this.setState({
      recipe: e.target.value
    });
  }

  _handleCalorieCount = (e) => {
    this.props.handleCalorieCount(e.target.value);
  }

  render(){

    let nutritionInfo = this.props.state.nutrition.map((item, index) => {
      return <NutritionTable key={ index } item={ item } />
    });
    return (
      <div className="container">
        <div className="row col-md-8">
          <form className="" onSubmit={ this._handleFormSubmit }>
            <div className="form-group">
              <h1>Step 1</h1>
              <h4>Enter a recipe below</h4>
              <textarea onChange={ this._handleChange } name="recipe" className="form-control" rows="10" value={ this.state.recipe }></textarea>
              <br/>
              <button disabled={ !this.state.recipe } type="submit" className="btn btn-default btn-lg">Calculate Foods</button>
            </div>
          </form>
        </div>
        <div className="row col-md-8">
          { this.props.state.render ?
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Food</th>
                    <th>Weight</th>
                    {/* <th>Total Fat</th>
                    <th>Total Carbs</th>
                    <th>Protein</th> */}
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  { nutritionInfo }
                </tbody>
              </table>
              <div className="row">
                <div className="col-md-1">
                  <label>Servings</label>
                </div>
                <div className="col-md-2">
                  <input className="form-control" type="number" min="1" name="serving" onChange={ this._handleCalorieCount }/>
                </div>
              </div>

            </div>

          : null }
        </div>

      </div>
    )
  }
}
