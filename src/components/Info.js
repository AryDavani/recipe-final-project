import React, {Component} from 'react';

export default class Info extends Component {

  render(){
    return (
      <div className="container">
        <div className="info">
          <h3>FDA Regulations</h3>
          <blockquote>
            "Americans eat and drink about one-third of their calories away from home. Making calorie information available on chain restaurant menus will help consumers make informed choices for themselves and their families."
            <br/>
            <br/>
            In May 2017, the FDA passed a regulation that requires restaurants with 20 or more locations to list calorie information for standard menu items. <a href="https://www.fda.gov/food/ingredientspackaginglabeling/labelingnutrition/ucm248732.htm" target="_blank">Read More Here.</a>
          </blockquote>
        </div>
        <div className="cards">
          <div>
            <img src={require("../images/pins.png")}/>
            <p>Add Ingredients</p>
          </div>
          <div>
            <img src={require("../images/label2.png")}/>
            <p>Calculate Servings</p>
          </div>
          <div>
            <img src={require("../images/plate.png")}/>
            <p>Get Nutrition</p>
          </div>
        </div>
      </div>
    )
  }
}
