import React, { Component } from 'react';

export default class NutritionLabel extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="background">
        <table className="table">
          <thead className="thead-inverse">
            <tr className="bg-dark">
              <th></th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Food</th>
              <th>Calories</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}
