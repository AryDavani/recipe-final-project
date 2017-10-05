import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import Modal from 'react-modal';
import modalStyle from '../styles/modal';

export default class NavBar extends Component {
  constructor(){
    super();

    this.state = {
      infoModal: false,
      formModal: false
    }
  }

  _openModal = () => {
    this.setState({ infoModal: true });
    console.log(this.state);
  }
  _formModal = () => {
    this.setState({
      formModal: true
    })
    console.log("formfired", this.state);
  }

  _closeModal = () => {
    this.setState({ infoModal: false });
  }

  render(){
    return (
      <div className="">

        <div className='navbar'>
          <NavLink onMouseOver={ this._openModal } name="infoModal" to='/'>How It Works</NavLink>
          <NavLink onClick={ this._formModal } name="formModal" to='/add'>Add</NavLink>
          <NavLink to='/nutrition'>My Menu</NavLink>
        </div>
        { this.props.children }

        <Modal
          isOpen={ this.state.infoModal }
          style = { modalStyle }
          contentLabel= "Information Modal"
          >
          <h4>Why?</h4>
          <p>In May 2017, the FDA passed a regulation that requires restaurants with 20 or more locations to list calorie information for standard menu items. <a href="https://www.fda.gov/food/ingredientspackaginglabeling/labelingnutrition/ucm248732.htm">Read more here</a></p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button onClick={ this._closeModal } name="infoModal" type="button" className="btn btn-dark">close</button>
        </Modal>
      </div>
    )
  }
}
