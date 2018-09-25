import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: 1,
      guess: '...',
      show: false
    };
  }

  check = (e, guess) => {
    this.setState({
      ...this.state,
      binary: parseInt(e.target.value, 10),
      guess: guess,
      show: true
    });
    guess === 'Terrible'
      ? this.props.updateTrait('inductive', 'j')
      : this.props.updateTrait('inductive', 'p');
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">How does this make you feel? </p>{' '}
          <div className="email" alt="email" />
          {this.state.guess}
          <ul className="f fw my1">
            <button
              className="inline-block mr05 fa ac mb1"
              onClick={e => this.check(e, 'Terrible')}
            >
              Terrible
            </button>
            <button
              className="inline-block mr05 fa ac mb1"
              onClick={e => this.check(e, 'Indifferent')}
            >
              Indifferent
            </button>
          </ul>
          <PrevNext show={this.state.show} />
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    question: state.question
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
)(Email);
