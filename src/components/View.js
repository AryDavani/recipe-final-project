import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { PARSE_URL, PARSE_HEADERS } from "../parse";
import PROJECT_URI from '../utility';
import Footer from './Footer';
import NutritionTable from './NutritionTable';

export default class View extends Component {
  constructor() {
    super();

    this.state = {
      apiData: [],
      name: ''
    }
  }

  componentDidMount = () => {
    fetch(
      `${PARSE_URL}/classes/menuItems/` + this.props.match.params.objectId,
      {
        headers: PARSE_HEADERS
      }
    )
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      this.setState({
        apiData: data.apiData.foods,
        name: data.name
      })
    })
  }

  render(){
    let nutritionInfo = this.state.apiData.map((item, index) => {
      return <NutritionTable key={index} item={item} />;
    });

    return (
      <div>
        <div className="nutrition-nav user">
          <NavLink to={PROJECT_URI + "/home"}>
            <i className="fa fa-long-arrow-left fa-2x" />
          </NavLink>
        </div>

        <div className="view-items container">
          <div className="center-text">
            <h1>{this.state.name} Recipe</h1>
          </div>
          <br/>
          <br/>
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
        </div>
        <Footer />
      </div>
    )
  }
}
