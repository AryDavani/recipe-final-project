import React, { Component } from 'react';

class App extends Component {

  _handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.recipe.value);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={ this._handleFormSubmit }>
          <div className="form-group">
            <p>Paste a recipe below</p>
            <textarea name="recipe" className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Calculate Foods</button>
        </form>
      </div>
    );
  }
}

export default App;
