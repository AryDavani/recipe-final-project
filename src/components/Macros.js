import React, {Component} from 'react';
import {PARSE_URL, PARSE_HEADERS} from '../parse';
import NutritionInfo from '../models/nutrition';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';
import PROJECT_URI from '../utility';


export default class Macros extends Component {
  constructor() {
    super();

    this.state = {
      nutritionInfo: new NutritionInfo,
      name: '',
      percentages: {}
    }
  }

  componentDidMount = () => {
    fetch(`${PARSE_URL}/classes/menuItems/` + this.props.match.params.objectId, {
      headers: PARSE_HEADERS
    }).then((resp) => {
      return resp.json();
    }).then((data) => {
      let nutritionInfo = new NutritionInfo(data.totals, data.servings);
      this.setState({
        nutritionInfo: nutritionInfo,
        name: data.name
      });
      this.getDailyPercentage();
    });
  }

  getPercent = (num, dv) => {
    return parseFloat((num / dv * 100).toFixed());
  }

  getDailyPercentage = () => {
    let percentages = {};
    percentages.totalFat = this.getPercent(this.state.nutritionInfo.totalFat, 65);
    percentages.saturatedFat = this.getPercent(this.state.nutritionInfo.saturatedFat, 20);
    percentages.cholesterol = this.getPercent(this.state.nutritionInfo.cholesterol, 300);
    percentages.sodium = this.getPercent(this.state.nutritionInfo.sodium, 2400);
    percentages.potassium = this.getPercent(this.state.nutritionInfo.potassium, 3500);
    percentages.totalCarbs = this.getPercent(this.state.nutritionInfo.totalCarbs, 300);
    percentages.fiber = this.getPercent(this.state.nutritionInfo.fiber, 25);
    percentages.protein = this.getPercent(this.state.nutritionInfo.protein, 50);
    this.setState({
      percentages: percentages
    })
  }


  render(){
    console.log('macros', this.state.nutritionInfo);
    return (
      <div>
        <div className="nutrition-nav">
        </div>
        <div className="nutrition-label-outer">
          <div className="nutrition-label">
            <div className="nutrition-title">Nutrition Facts</div>
            <div className="nutrition-recipe">{this.state.name}</div>
            <div className="nutrition-line nutrition-line-big"></div>
            <div className="nutrition-serving">Amount Per Serving</div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Calories</strong>{this.state.nutritionInfo.calories}</span>
              <span className="nutrition-percentage">Calories from Fat {this.state.nutritionInfo.caloriesFromFat}</span>
            </div>
            <div className="nutrition-line"></div>
            <div className="nutrition-item">
              <span className="nutrition-daily"><strong>% Daily Value*</strong></span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Total Fat</strong>{this.state.nutritionInfo.totalFat}g</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.totalFat}%</strong></span>
            </div>
            <div className="nutrition-sub-item">
              <span className="nutrition-sub">Saturated Fat {this.state.nutritionInfo.saturatedFat}g</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.saturatedFat}%</strong></span>
            </div>
            {/* <div className="nutrition-sub-item">
              <span className="nutrition-sub"><i>Trans Fat</i> {this.state.nutritionInfo.transFat}g</span>
            </div> */}
            <div className="nutrition-sub-item">
              <span className="nutrition-sub">Polyunsaturated Fat {this.state.nutritionInfo.polyunsaturatedFat}g</span>
            </div>
            <div className="nutrition-sub-item">
              <span className="nutrition-sub">Monounsaturated Fat {this.state.nutritionInfo.monounsaturatedFat}g</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Cholesterol</strong>{this.state.nutritionInfo.cholesterol}mg</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.cholesterol}%</strong></span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Sodium</strong>{this.state.nutritionInfo.sodium}mg</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.sodium}%</strong></span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Potassium</strong>{this.state.nutritionInfo.potassium}mg</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.potassium}%</strong></span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Total Carbohydrates</strong> {this.state.nutritionInfo.totalCarbs}g</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.totalCarbs}%</strong></span>
            </div>
            <div className="nutrition-sub-item">
              <span className="nutrition-sub">Dietary Fiber {this.state.nutritionInfo.fiber}g</span>
            </div>
            <div className="nutrition-sub-item">
              <span className="nutrition-sub">Sugars {this.state.nutritionInfo.sugars}g</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main"><strong>Protein</strong>{this.state.nutritionInfo.protein}g</span>
              <span className="nutrition-percentage"><strong>{this.state.percentages.protein}%</strong></span>
            </div>
            <div className="nutrition-line nutrition-line-big"></div>
            <div className="nutrition-item">
              <span className="nutrition-main">Vitamin A</span>
              <span className="nutrition-percentage">{this.state.nutritionInfo.vitaminA}%</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main">Vitamin C</span>
              <span className="nutrition-percentage">{this.state.nutritionInfo.vitaminC}%</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main">Calcium</span>
              <span className="nutrition-percentage">{this.state.nutritionInfo.calcium}%</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-main">Iron</span>
              <span className="nutrition-percentage">{this.state.nutritionInfo.iron}%</span>
            </div>
            <div className="nutrition-warning">
              * Percent Daily Values are based on a 2000 calorie diet.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
