import React, {Component} from 'react';

export default class Info extends Component {

  render(){
    return (
      <div className="container">
        <div className="info">
          <h4>FDA Regulations</h4>
          <blockquote>
            "Americans eat and drink about one-third of their calories away from home. Making calorie information available on chain restaurant menus will help consumers make informed choices for themselves and their families."
            <br/>
            <br/>
            In May 2017, the FDA passed a regulation that requires restaurants with 20 or more locations to list calorie information for standard menu items. <a href="https://www.fda.gov/food/ingredientspackaginglabeling/labelingnutrition/ucm248732.htm" target="_blank">Read More Here.</a>
          </blockquote>
        </div>
        <div className="cards">
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div className="get-started">
          <button onClick={() => { this.props.history.push('/signup') }} className="btn btn-success btn-lg">Get Started!</button>
        </div>

      </div>
    )
  }
}
