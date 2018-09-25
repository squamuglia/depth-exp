import React, { Component } from 'react';
import PrevNext from '../components/prev-next';
import { connect } from 'react-redux';

class Foot extends Component {
  state = {
    openness: null
  };

  updateOpenness = val => {
    this.setState({
      openness: val
    });
    if (val < 4) {
      this.props.updateTrait('subjective', 'i');
      this.props.updateTrait('objective', 's');
      this.props.updateTrait('deductive', 't');
      this.props.updateTrait('inductive', 'j');
    } else {
      this.props.updateTrait('subjective', 'i');
      this.props.updateTrait('objective', 's');
      this.props.updateTrait('deductive', 't');
      this.props.updateTrait('inductive', 'p');
    }
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">How good do you feel about this?</p>
          <div className="x ac my1">
            <img src="/q/foot.jpg" alt="foot" />
          </div>
          <ul className="f">
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio1"
                type="radio"
                name="low"
                value="1"
                checked={this.state.openness === 1}
                onChange={() => this.updateOpenness(1)}
              />
              <label htmlFor="radio1" className="radio-shadow p1">
                1
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio2"
                type="radio"
                name="low"
                value="2"
                checked={this.state.openness === 2}
                onChange={() => this.updateOpenness(2)}
              />
              <label htmlFor="radio2" className="radio-shadow p1">
                2
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio3"
                type="radio"
                name="low"
                value="3"
                checked={this.state.openness === 3}
                onChange={() => this.updateOpenness(3)}
              />
              <label htmlFor="radio3" className="radio-shadow p1">
                3
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio4"
                type="radio"
                name="low"
                value="4"
                checked={this.state.openness === 4}
                onChange={() => this.updateOpenness(4)}
              />
              <label htmlFor="radio4" className="radio-shadow p1">
                4
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio5"
                type="radio"
                name="low"
                value="5"
                checked={this.state.openness === 5}
                onChange={() => this.updateOpenness(5)}
              />
              <label htmlFor="radio5" className="radio-shadow p1">
                5
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio6"
                type="radio"
                name="low"
                value="6"
                checked={this.state.openness === 6}
                onChange={() => this.updateOpenness(6)}
              />
              <label htmlFor="radio6" className="radio-shadow p1">
                6
              </label>
            </li>
            <li className="inline-block mr05 fa ac mb1">
              <input
                className="none"
                id="radio7"
                type="radio"
                name="low"
                value="7"
                checked={this.state.openness === 7}
                onChange={() => this.updateOpenness(7)}
              />
              <label htmlFor="radio7" className="radio-shadow p1">
                7
              </label>
            </li>
          </ul>
          <PrevNext show={this.state.openness} />
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    question: state.question,
    subjective: state.subjective
  };
}

function mdp(dispatch) {
  return {
    updateTrait: (trait, score) => {
      dispatch({ type: 'UPDATE_TRAIT', trait: trait, payload: score });
    }
  };
}

export default connect(
  msp,
  mdp
)(Foot);
