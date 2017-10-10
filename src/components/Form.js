import React, { Component } from 'react';
import Modal from 'react-modal';
// import {loginModalStyle} from '../styles/modal';
import NutritionTable from './NutritionTable';
import {URL, HEADERS} from '../parse';

export default class Form extends Component {
  constructor(){
    super();

    this.state = {
      recipe: '',
      nutrition: [],
      render: false,
      isOpen: true
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

  _closeModal = () => {
    this.setState({ isOpen: false });
  }

  render(){
    console.log('STATE', this.state);

    let nutritionInfo = this.state.nutrition.map((item, index) => {
      return <NutritionTable key={ index } item={ item } />
    });


    return (
      <div className="">
        {/* <Modal isOpen={ this.state.isOpen } > */}
          <button onClick={ this._closeModal }>close</button>
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
          <div className="col-md-6">
          </div>
        {/* </Modal> */}
      </div>
    )
  }
}
