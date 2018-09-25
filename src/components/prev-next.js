import React from 'react';
import { connect } from 'react-redux';

const showNext = (val, nextQ) => {
  if (val === 'end') {
    return (
      <button className="flr" onClick={nextQ}>
        Analyze Me!
      </button>
    );
  } else if (val) {
    return (
      <button className="flr" onClick={nextQ}>
        Next >
      </button>
    );
  } else {
    return (
      <button className="flr" disabled>
        Next >
      </button>
    );
  }
};
const PrevNext = props => (
  <React.Fragment>
    <button className="fll" onClick={props.previousQuestion}>
      {'< Prev'}
    </button>
    {showNext(props.show, props.nextQuestion)}
  </React.Fragment>
);

function msp(state) {
  return {
    question: state.question,
    openness: state.openness
  };
}

function mdp(dispatch) {
  return {
    nextQuestion: () => {
      dispatch({ type: 'NEXT_QUESTION' });
    },
    previousQuestion: () => {
      dispatch({ type: 'PREVIOUS_QUESTION' });
    }
  };
}

export default connect(
  msp,
  mdp
)(PrevNext);
