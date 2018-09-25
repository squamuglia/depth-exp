import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class Fear extends Component {
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
    guess === 'Yes'
      ? this.props.updateTrait('subjective', 'e')
      : this.props.updateTrait('subjective', 'i');
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">
            Assuming for the sake of argument you're 13 years old, are you
            threatened by speaking to the cutest person in class?
          </p>
          {this.state.guess}
          <div className="f fw my1">
            <button
              className="inline-block mr05 fa ac mb1"
              onClick={e => this.check(e, 'Yes')}
            >
              Yes
            </button>
            <button
              className="inline-block mr05 fa ac mb1"
              onClick={e => this.check(e, 'No')}
            >
              No
            </button>
          </div>
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
)(Fear);
