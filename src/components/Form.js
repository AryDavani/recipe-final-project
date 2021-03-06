import React, { Component } from "react";
import NutritionTable from "./NutritionTable";
import { NavLink } from "react-router-dom";
import { API_URL, API_HEADERS } from "../parse";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      recipe: ""
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      recipe: nextProps.data.recipe
    });
  };

  _handleFormSubmit = e => {
    e.preventDefault();
    let item = { query: this.state.recipe };

    this.props.handleFormSubmit(item);
  };

  _handleChange = e => {
    this.setState({
      recipe: e.target.value
    });
  };

  _handleCalorieCount = e => {
    let servings = e.target.value;
    this.props.handleCalorieCount(servings);
  };

  render() {
    let nutritionInfo = this.props.data.nutrition.map((item, index) => {
      return <NutritionTable key={index} item={item} />;
    });

    let editCalories = this.props.data.totalCals / this.props.data.servings;
    let totalCalories = this.props.data.calories / this.props.data.servings;

    return (
      <div className="container">
        <div className="row col-md-8">
          <form onSubmit={this._handleFormSubmit}>
            {!this.props.data.idForEdit ? (
              <div className="steps">
                <h1>Step 1</h1>
                <h4>Enter a recipe below</h4>
              </div>
            ) : (
              <div className="steps">
                <h1>Edit Recipe</h1>
              </div>
            )}

            <p className="red">{this.props.data.errorMsg}</p>

            <div className="form-group">
              <textarea
                onChange={this._handleChange}
                name="recipe"
                className="form-control"
                rows="10"
                value={this.state.recipe}
              />
              <br />
              <button
                disabled={!this.state.recipe}
                type="submit"
                className="btn btn-default btn-lg"
              >
                Calculate Foods
              </button>
            </div>
          </form>
        </div>
        <div className="row col-md-8">
          {this.props.data.render ? (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th />
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Food</th>
                    <th>Weight</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>{nutritionInfo}</tbody>
              </table>
              <p className="to-gray">
                review nutrition information and make any neccesary changes
              </p>
              <br />
              <div className="steps">
                <h1>Step 2</h1>
                <h4>Calculate calories</h4>
              </div>
              <br />
              <div className="row step-two">
                <div className="col-md-10">
                  <h5>Servings</h5>
                </div>
                <div className="col-md-2">
                  <input
                    value={this.props.data.servings}
                    className="form-control center-text"
                    type="number"
                    min="1"
                    name="serving"
                    onChange={this._handleCalorieCount}
                  />
                </div>
              </div>
              <br />
              <div className="row step-two">
                <div className="col-md-10">
                  <h5 className="">Calories per serving</h5>
                </div>
                <div className="col-md-2">
                  <h5 className="center-text">
                    {this.props.data.idForEdit
                      ? editCalories.toFixed([0])
                      : totalCalories.toFixed([0])}
                  </h5>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
