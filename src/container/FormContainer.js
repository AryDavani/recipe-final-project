import React, { Component } from 'react';
import NutritionTable from '../components/NutritionTable';
import Form from '../components/Form';
import {API_URL, API_HEADERS, PARSE_URL, PARSE_HEADERS} from '../parse';
import BaseLayout from '../components/BaseLayout';
import AddRecipe from '../components/AddRecipe';
import PROJECT_URI from '../utility';

export default class FormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
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
      let calories = 0;
      data.foods.map((item) => {
        calories += item.nf_calories;
      });
      this.setState({
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
    item.recipe = this.state.recipe;
    item.calories = totalCalories;
    item.servings = parseInt(this.state.servings);
    item.apiData = this.state.apiData;
    item.owner = {
      "__type": "Pointer",
      "className": "_User",
      "objectId": this.state.user.objectId
    };

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

  _handleEditPost = (item) => {
    console.log('EDIT RECEIVED', item);
  }

  render(){
    console.log('does this reachhhhhhh??????', this);
    return(
      <BaseLayout>
        <Form handleFormSubmit={ this._handleFormSubmit } data={ this.state } handleCalorieCount={ this._handleCalorieCount } handleEditPost={ this._handleEditPost } edit={ this.state.IdForEdit }/>
        <AddRecipe data={ this.state } handleRecipePost={ this._handleRecipePost }/>
      </BaseLayout>
    );
  }
}
