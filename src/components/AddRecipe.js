import React, { Component } from "react";

export default class AddRecipe extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: ""
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      name: nextProps.data.name,
      description: nextProps.data.description
    });
  };

  _handleRecipePost = e => {
    e.preventDefault();

    let recipe = {
      name: this.state.name,
      description: this.state.description
    };

    this.props.handleRecipePost(recipe);

    e.target.reset();
  };

  _handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  _handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        {this.props.data.render ? (
          <div className="row col-md-8">
            <div className="steps">
              <h1>Step 3</h1>
              <h4>Add Item to Menu</h4>
            </div>
            <br />
            <form className="step-three" onSubmit={this._handleRecipePost}>
              <div className="row">
                <div className="col-md-6">
                  <label>Title</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name of Menu Item"
                    onChange={this._handleNameChange}
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <label>Description</label>
                  <textarea
                    rows="5"
                    required
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Description"
                    onChange={this._handleDescriptionChange}
                    value={this.state.description}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <button type="submit" className="btn btn-default">
                    {this.props.data.idForEdit ? "Update Item" : "Add To Menu"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
