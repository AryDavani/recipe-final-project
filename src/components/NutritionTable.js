import React, { Component } from "react";

export default class NutritionTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>
          <img width="70" src={this.props.item.photo.thumb} />
        </td>
        <td>{this.props.item.serving_qty}</td>
        <td>{this.props.item.serving_unit}</td>
        <td>{this.props.item.food_name}</td>
        <td>{this.props.item.serving_weight_grams}g</td>
        <td>{this.props.item.nf_calories} kcal</td>
      </tr>
    );
  }
}
