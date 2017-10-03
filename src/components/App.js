import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      recipe: ''
    }
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", this.state.recipe);
  }

  _handleChange = (e) => {
    this.setState({
      recipe: e.target.value
    });
    console.log("onchange fired", this.state.recipe);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={ this._handleFormSubmit }>
          <div className="form-group">
            <p>Paste a recipe below</p>
            <textarea onChange={ this._handleChange } name="recipe" className="form-control" rows="3" value={ this.state.recipe }></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Calculate Foods</button>
        </form>
      </div>
    );
  }
}

export default App;
