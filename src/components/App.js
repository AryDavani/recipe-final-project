import React, { Component } from 'react';
import NutritionLabel from './NutritionLabel';
// import {NutritionLabel} from 'nutrition-label-jquery-plugin';

class App extends Component {
  constructor(){
    super();

    this.state = {
      recipe: ''
    }
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", this.state.recipe);
  }

  _handleChange = (e) => {
    this.setState({
      recipe: e.target.value
    });
    console.log("onchange fired", this.state.recipe);
  }

  render() {
    let header = "data bites";

    return (
      <div className="container">
        <div className="banner">
          <h1>{ header }</h1>
        </div>
        <div className="well">
          <form className="row" onSubmit={ this._handleFormSubmit }>
            <div className="form-group col-md-6">
              <h3>Paste a recipe below</h3>
              <textarea onChange={ this._handleChange } name="recipe" className="form-control" rows="10" value={ this.state.recipe }></textarea>
              <br/>
              <button type="submit" className="btn btn-info btn-lg">Calculate Foods</button>
            </div>
          </form>
          <NutritionLabel />
        </div>
      </div>
    );
  }
}

export default App;
