import React, {Component} from 'react';

export default class AddRecipe extends Component {
  constructor() {
    super();
  }

  _handleRecipePost = (e) => {
    e.preventDefault();

    let recipe = {
      name: e.target.recipe.value
    }

    this.props.handleRecipePost(recipe);
  }

  render(){
    return(
      <div className="container">
        { this.props.state.render ?
          <div className="row col-md-8">
            <div className="steps">
              <h1>Step 3</h1>
              <h4>Add Item to Menu</h4>
            </div>
            <br/>
            <form className="add-recipe" onSubmit={ this._handleRecipePost }>
              <div className="row">
                <div className="col-md-8">
                  <input required type="text" className="form-control" name="recipe" placeholder="Name of Menu Item"/>
                </div>
                <div className="col-md-4 right-text">
                  <button type="submit" className="btn btn-default">Add To Menu</button>
                </div>
              </div>
            </form>
          </div>
        : null }
      </div>
    )
  }
}
