import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

class R1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '...',
      show: false
    };
  }

  check = (e, guess) => {
    this.setState({
      guess: guess,
      show: true
    });
    if (guess === 'bat') {
      this.props.updateTrait('inductive', 'j');
    } else if (guess === 'mario') {
      this.props.updateTrait('objective', 's');
    } else if (guess === 'ovaries') {
      this.props.updateTrait('deductive', 'f');
    } else {
      this.props.updateTrait('deductive', 'f');
    }
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4">What do you make of this shit?</p>
          <img src="/r/r1.jpg" className="x" alt="rorschach" />
          <p>I think it's {this.state.guess}</p>
          <div className="f fw mb2">
            <button
              className="inline-block mr05 f-50 ac mb1"
              onClick={e => this.check(e, 'a bat.')}
            >
              Bat
            </button>
            <button
              className="inline-block mr05 f-50 ac mb1"
              onClick={e => this.check(e, 'ovaries.')}
            >
              Ovaries
            </button>
            <button
              className="inline-block mr05 f-50 ac mb1"
              onClick={e => this.check(e, 'Mario.')}
            >
              Mario
            </button>
            <button
              className="inline-block mr05 f-50 ac mb1"
              onClick={e => this.check(e, 'Woody Woodpecker.')}
            >
              Woody Woodpecker
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
)(R1);
