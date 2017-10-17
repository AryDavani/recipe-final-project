import React, { Component } from 'react';
import NutritionTable from '../components/NutritionTable';
import Form from '../components/Form';
import {API_URL, API_HEADERS, PARSE_URL, PARSE_HEADERS} from '../parse';
import BaseLayout from '../components/BaseLayout';
import AddRecipe from '../components/AddRecipe';

export default class FormContainer extends Component {
  constructor(){
    super();

    this.state = {
      recipe: '',
      name: '',
      calories: 0,
      servings: 1,
      nutrition: [],
      user: {}
    }
  }

  componentDidMount = () => {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  }

  _handleFormSubmit = (item) => {

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(item),
      headers: API_HEADERS
    }).then(response => {
      return response.json();
    }).then(data => {
      let calories = 0;
      data.foods.map((item) => {
        calories += item.nf_calories;
      });
      this.setState({
        calories: calories.toFixed([0]),
        recipe: item.query,
        nutrition: data.foods,
        render: true
      });
    });

  }

  _handleCalorieCount = (num) =>{
    console.log('NUMBER', num);
    this.setState({
      servings: num
    });
  }

  _handleRecipePost = (recipe) => {
    recipe.query = this.state.query;
    recipe.calories = this.state.calories;
    recipe.owner = {
      "__type": "Pointer",
      "className": "_User",
      "objectId": this.state.user.objectId
    };
    console.log('recipe, recipe', recipe);
    // fetch(`${PARSE_URL}/classes/menuItems`, {
    //   method: 'POST',
    //   body: JSON.stringify(recipe),
    //   headers: PARSE_HEADERS,
    //
    //
    // })
  }

  render(){
    return(
      <BaseLayout>
        <Form handleFormSubmit={ this._handleFormSubmit } state={ this.state } handleCalorieCount={ this._handleCalorieCount }/>
        <AddRecipe state={ this.state } handleRecipePost={ this._handleRecipePost }/>
      </BaseLayout>
    );
  }
}
