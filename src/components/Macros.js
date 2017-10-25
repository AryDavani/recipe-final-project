import React, {Component} from 'react';
import {PARSE_URL, PARSE_HEADERS} from '../parse';


export default class Macros extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    }
  }

  componentDidMount = () => {
    fetch(`${PARSE_URL}/classes/menuItems/` + this.props.match.params.objectId, {
      headers: PARSE_HEADERS
    }).then((resp) => {
      return resp.json();
    }).then((data) => {
      this.setState({
        data: data
      })
    });
  }

  render(){
    return (
      <div className="nutrition-label-outer">
        <div className="nutrition-label">
          <div className="nutrition-title">Nutrition Facts</div>
          <div className="nutrition-recipe">{this.state.data.name}</div>
          <div className="nutrition-line nutrition-line-big"></div>
          <div className="nutrition-serving">Amount Per Serving</div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Calories</strong>{this.state.data.calories}</span>
            <span className="nutrition-percentage">Calories from Fat 81</span>
          </div>
          <div className="nutrition-line"></div>
          <div className="nutrition-item">
            <span className="nutrition-percentage"><strong>% Daily Value*</strong></span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Total Fat</strong>9g</span>
            <span className="nutrition-percentage"><strong>14%</strong></span>
          </div>
          <div className="nutrition-sub-item">
            <span className="nutrition-sub">Saturated Fat 6g</span>
            <span className="nutrition-percentage"><strong>30%</strong></span>
          </div>
          <div className="nutrition-sub-item">
            <span className="nutrition-sub">Polyunsaturated Fat 0.2g</span>
          </div>
          <div className="nutrition-sub-item">
            <span className="nutrition-sub">Monounsaturated Fat 1g</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Cholesterol</strong>21mg</span>
            <span className="nutrition-percentage"><strong>7%</strong></span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Sodium</strong>56mg</span>
            <span className="nutrition-percentage"><strong>2%</strong></span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Potassium</strong>8mg</span>
            <span className="nutrition-percentage"><strong>0%</strong></span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Total Carbohydrates</strong> 1g</span>
            <span className="nutrition-percentage"><strong>0%</strong></span>
          </div>
          <div className="nutrition-sub-item">
            <span className="nutrition-sub">Sugars 1g</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main"><strong>Protein</strong>1g</span>
            <span className="nutrition-percentage"><strong>2%</strong></span>
          </div>
          <div className="nutrition-line nutrition-line-big"></div>
          <div className="nutrition-item">
            <span className="nutrition-main">Vitamin A</span>
            <span className="nutrition-percentage">6%</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main">Vitamin C</span>
            <span className="nutrition-percentage">0.1%</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main">Calcium</span>
            <span className="nutrition-percentage">2%</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-main">Iron</span>
            <span className="nutrition-percentage">6%</span>
          </div>
          <div className="nutrition-warning">
            * Percent Daily Values are based on a 2000 calorie diet.
          </div>
        </div>
      </div>
    )
  }
}
