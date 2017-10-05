import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import Modal from 'react-modal';

export default class NavBar extends Component {
  constructor(){
    super();

    this.state = {
      modalOpen: false
    }
  }

  _openModal = () => {
    console.log('open modal');
    this.setState({ modalOpen: true });
  }

  _closeModal = () => {
    console.log('open modal');
    this.setState({ modalOpen: false });
  }

  render(){
    let modalStyle = {
      overlay : {
        position          : 'fixed',
        top               : '15%',
        left              : '15%',
        right             : '15%',
        bottom            : '15%',
        backgroundColor   : 'rgba(0, 0, 0, 0.3)'
      },
      content : {
        color: '#f7f0e2',
        position                   : 'absolute',
        top                        : '0%',
        left                       : '0%',
        right                      : '0%',
        bottom                     : '0%',
        border                     : '1px solid #ccc',
        background                 : 'rgba(0, 0, 0, 0.4)',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'

      }
    }
    return (
      <div>
        <nav className='navbar'>
          <NavLink on onMouseOver={ this._openModal } to='/'>How It Works</NavLink>
          <NavLink to='/form'>Add</NavLink>
          <NavLink to='/nutrition'>My Menu</NavLink>
        </nav>
        { this.props.children }

        <Modal
          isOpen={ this.state.modalOpen }
          style = { modalStyle }
          >
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button onClick={ this._closeModal } type="button" className="btn btn-dark">close</button>
        </Modal>
      </div>
    )
  }
}
