import React, { Component } from 'react';
import Restaurant from './restaurant';
import { connect } from 'react-redux';
import { getPersonality } from '../helpers/algo';
import Flickity from 'react-flickity-component';

class Results extends Component {
  displayRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
      return <Restaurant fav={false} restaurant={restaurant} />;
    });
  };

  render() {
    return (
      <div className="fa f fw mw-75">
        <p className="s4 upper x mb0">
          <span className="b">
            You're a(n) {getPersonality(this.props).name}
          </span>{' '}
          ({this.props.subjective}
          {this.props.objective}
          {this.props.deductive}
          {this.props.inductive})
        </p>
        <p className="mt0">
          Behold, your darkest desires <span className="small">(probably)</span>
          :
        </p>
        <div className="block x">
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
          >
            {this.displayRestaurants()}
          </Flickity>
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    location: state.location,
    url: state.url,
    restaurants: state.restaurants,
    subjective: state.subjective,
    objective: state.objective,
    deductive: state.deductive,
    inductive: state.inductive
  };
}

function mdp(dispatch) {
  return {
    addRests: restaurants => {
      dispatch({ type: 'ADD_RESTAURANTS', payload: restaurants });
    }
  };
}

export default connect(
  msp,
  mdp
)(Results);
