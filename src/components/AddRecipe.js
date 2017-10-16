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
          <div>
            <h1>Step 3</h1>
            <br/>
            <form onSubmit={ this._handleRecipePost }>
              <div className="row">
                <div className="col-md-2">
                  <input required type="text" className="form-control" name="recipe" placeholder="Name of Menu Item"/>
                </div>
                <div>
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
