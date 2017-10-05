import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Form extends Component {
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
  render(){
    console.log(this.props);
    return (
      <div className="background">
        <Modal isOpen={ this.state.modalOpen } >
          <form className="row" onSubmit={ this._handleFormSubmit }>
            <div className="form-group col-md-6">
              <h3>Paste a recipe below</h3>
              <textarea onChange={ this._handleChange } name="recipe" className="form-control" rows="10" value={ this.state.recipe }></textarea>
              <br/>
              <button type="submit" className="btn btn-default btn-lg">Calculate Foods</button>
            </div>
          </form>
        </Modal>
      </div>
    )
  }
}
