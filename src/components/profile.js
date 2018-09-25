import React from 'react';
import { connect } from 'react-redux';
import { getPersonality } from '../helpers/algo';
import { explanation } from '../helpers/explanation';

const Profile = props => {
  return (
    <div className="fa mw-25 my1">
      <p className="small">You are a:</p>
      <h4>{getPersonality(props).name}</h4>
      <div
        className="red-sq"
        style={{
          background: 'url(' + getPersonality(props).img + ')',
          backgroundSize: 'cover'
        }}
      />
      <p className="s4 b upper">
        {props.subjective}
        {props.objective}
        {props.deductive}
        {props.inductive}
      </p>
      <p>Spiciness: {props.spiciness}</p>
      <p>{explanation(props)}</p>
      {/* <ul>
        <li>
          <span ref="e">Extraversion</span>/<span ref="i">Introversion</span>
        </li>
        <li>
          <span ref="s">Sensing</span>/<span ref="n">Intuition</span>
        </li>
        <li>
          <span ref="t">Thinking</span>/<span ref="f">Feeling</span>
        </li>
        <li>
          <span ref="j">Judging</span>/<span ref="p">Perceiving</span>
        </li>
      </ul> */}
    </div>
  );
};

function msp(state) {
  return {
    username: state.username,
    spiciness: state.spiciness,
    subjective: state.subjective,
    objective: state.objective,
    deductive: state.deductive,
    inductive: state.inductive
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
)(Profile);
