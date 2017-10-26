import React, { Component } from 'react';
import NutritionTable from '../components/NutritionTable';
import Form from '../components/Form';
import {API_URL, API_HEADERS, PARSE_URL, PARSE_HEADERS} from '../parse';
import BaseLayout from '../components/BaseLayout';
import AddRecipe from '../components/AddRecipe';
import PROJECT_URI from '../utility';
import NutritionInfo from '../models/nutrition';

export default class FormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      totals: {},
      recipe: '',
      name: '',
      calories: 0,
      servings: 1,
      nutrition: [],
      user: JSON.parse(localStorage.getItem('user')),
      idForEdit: props.match.params.objectId,
      apiData: {},
      errorMsg: ''
    }
  }

  componentDidMount = () => {
    // This is an Add if we don't have an object ID so bail
    if(!this.props.match.params.objectId){
      console.log('no object iD on parameter');
      return;
    }

    fetch(PARSE_URL + '/classes/menuItems/' + this.state.idForEdit, {
      headers: PARSE_HEADERS
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log('data from server', data);
      let totalCals = 0;
      data.apiData.foods.map((item) => {
        totalCals += item.nf_calories;
      });

      this.setState({
        name: data.name,
        totalCals: totalCals.toFixed([0]),
        description: data.description,
        calories: data.calories.toFixed([0]),
        servings: data.servings,
        recipe: data.recipe,
        nutrition: data.apiData.foods,
        apiData: data.apiData,
        render: true
      });
    })

  }

  _handleFormSubmit = (item) => {
    // Request to Nutritionix API and setting the response to state

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(item),
      headers: API_HEADERS
    }).then(response => {
      return response.json();
    }).then(data => {
      if (data.message) {
        this.setState({
          errorMsg: data.message
        });
        return;
      }
      console.log('data from api fetch', data.foods);
      let calories = 0;
      let totals = new NutritionInfo;
      console.log('totals', totals);
      data.foods.map((item) => {
        totals.calories += item.nf_calories;
        totals.totalFat += item.nf_total_fat;
        totals.saturatedFat += item.nf_saturated_fat;
        totals.transFat += item.full_nutrients.find((item) => { return item.attr_id === 605 }).value;
        totals.polyunsaturatedFat += item.full_nutrients.find((item) => { return item.attr_id === 646 }).value;
        totals.monounsaturatedFat += item.full_nutrients.find((item) => { return item.attr_id === 645 }).value;
        totals.cholesterol += item.nf_cholesterol;
        totals.sodium += item.nf_sodium;
        totals.potassium += item.nf_potassium;
        totals.totalCarbs += item.nf_total_carbohydrate;
        totals.fiber += item.nf_dietary_fiber;
        totals.sugars += item.nf_sugars;
        totals.protein += item.nf_protein;
        totals.vitaminA += item.full_nutrients.find((item) => { return item.attr_id === 318 }).value;
        totals.vitaminC += item.full_nutrients.find((item) => { return item.attr_id === 401 }).value;
        totals.calcium += item.full_nutrients.find((item) => { return item.attr_id === 301 }).value;
        totals.iron += item.full_nutrients.find((item) => { return item.attr_id === 303 }).value;
        calories += item.nf_calories;
      });
      console.log('data from api fetch after instatiation: TOTALS', totals);
      this.setState({
        totals: totals,
        errorMsg: '',
        totalCals: calories.toFixed([0]),
        calories: calories.toFixed([0]),
        recipe: item.query,
        nutrition: data.foods,
        render: true,
        apiData: data
      });
    })
  }

  _handleCalorieCount = (num) =>{
    this.setState({
      servings: num
    });
  }

  _handleRecipePost = (item) => {
    // Post to Parse Server of new item
    let totalCalories = this.state.totalCals / this.state.servings;
    item.totals = this.state.totals;
    item.recipe = this.state.recipe;
    item.calories = totalCalories;
    item.servings = parseInt(this.state.servings);
    item.apiData = this.state.apiData;
    item.owner = {
      "__type": "Pointer",
      "className": "_User",
      "objectId": this.state.user.objectId
    };
    console.log('item before post', item);

    let urlSuffix = this.state.idForEdit ? `/${this.state.idForEdit}` : '';
    let method = this.state.idForEdit ? 'PUT' : 'POST';

    fetch(`${PARSE_URL}/classes/menuItems${urlSuffix}`, {
      method: method,
      body: JSON.stringify(item),
      headers: PARSE_HEADERS
    }).then((resp) => {
      return resp.json();
    }).then(() => {
      this.props.history.push(PROJECT_URI + '/home');
    });
  }


  render(){
    return(
      <BaseLayout>
        <Form handleFormSubmit={ this._handleFormSubmit } data={ this.state } handleCalorieCount={ this._handleCalorieCount } handleEditPost={ this._handleEditPost } edit={ this.state.IdForEdit }/>
        <AddRecipe data={ this.state } handleRecipePost={ this._handleRecipePost }/>
      </BaseLayout>
    );
  }
}
