import React from 'react';
import { connect } from 'react-redux';
import PrevNext from '../components/prev-next';

const location = props => (
  <div className="gutter f fw aic jcc fill abs">
    <div className="fa x m1 card">
      <div className="x">{props.question}</div>
      <p className="s4">Oh wait, where do you eat? </p>
      <p className="small">
        (Just as an aside, if you're not in a major metropolitan area, this
        might not work at all. In which case I recommend going to a Wawa or
        Publix.)
      </p>
      <label for="zip">Zip Code</label>
      <input
        type="text"
        placeholder="12345"
        id="zip"
        value={props.location}
        onChange={e => props.updateTrait('location', e.target.value)}
      />
      <PrevNext show="end" />
    </div>
  </div>
);

function msp(state) {
  return {
    question: state.question,
    location: state.location
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
)(location);
