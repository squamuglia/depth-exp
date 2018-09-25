import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './about';

class Nav extends Component {
  state = {
    about: false
  };

  toggle = state => {
    if (this.state[state]) {
      this.setState(
        {
          ...this.state,
          [state]: false
        },
        () => console.log(state, this.state)
      );
    } else {
      this.setState(
        {
          ...this.state,
          [state]: true
        },
        () => console.log(state, this.state)
      );
    }
  };

  render() {
    return (
      <div className="fix x">
        <About show={this.state.about} toggle={this.toggle} />
        <nav>
          <ul>
            <li>
              <Link to="/">Fridge Freud</Link>
            </li>
            <ul>
              <li key="about" onClick={() => this.toggle('about')}>
                About
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
