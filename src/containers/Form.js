import React, { Component } from 'react';
import Intro from '../questions/intro';
import Foot from '../questions/foot';
import Spiciness from '../questions/spiciness';
// import Pimp from '../questions/pimp';
// import R1 from '../questions/r1';
// import R2 from '../questions/r2';
// import Fear from '../questions/fear';
// import Email from '../questions/email';
// import Location from '../questions/location';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    scroll: 0
  };

  getQuestion1 = scroll => {
    if (scroll < 400) {
      console.log('intro');
      return <Intro />;
    } else if (scroll < 900) {
      console.log('FOOT');
      return <Foot />;
    } else if (scroll > 900) {
      return <Spiciness />;
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState(
      {
        scroll: window.scrollY
      },
      console.log('statescrolll', this.state)
    );
  };

  render() {
    let style = {
      transform: `translate(${this.state.scroll / 4}px) scale(${this.state
        .scroll / 1500})`
    };

    return (
      <div className="verylong">
        <div className="gutter f fw aic jcc fill abs z3 q1 fix">
          <div className="fa x m1 card" style={style}>
            {this.getQuestion1(this.state.scroll)}
          </div>
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    url: state.url,
    user_id: state.user_id,
    token: state.token,
    logged_in: state.logged_in,
    username: state.username,
    question: state.question
  };
}

function mdp(dispatch) {
  return {
    nextQuestion: questionData => {
      dispatch({ type: 'NEXT_QUESTION', payload: questionData });
    },
    previousQuestion: questionData => {
      dispatch({ type: 'PREVIOUS_QUESTION', payload: questionData });
    }
  };
}

export default connect(
  msp,
  mdp
)(Form);
