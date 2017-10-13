import React, {Component} from 'react';
import Modal from 'react-modal';
import {modalStyle} from '../styles/modal';

export default class Info extends Component {
  constructor() {
    super();

  render(){

    return (
      <div>
        <h4>Why?</h4>
        <p>In May 2017, the FDA passed a regulation that requires restaurants with 20 or more locations to list calorie information for standard menu items. <a href="https://www.fda.gov/food/ingredientspackaginglabeling/labelingnutrition/ucm248732.htm">Read more here</a></p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}
