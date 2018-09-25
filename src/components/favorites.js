import React from 'react';
import { connect } from 'react-redux';
import Restaurant from './restaurant';
import Flickity from 'react-flickity-component';

const displayRestaurants = props => {
  console.log('fav props', props.restaurants, 'favs', props.favorites);
  if (props.favorites.length) {
    const favorited = props.restaurants.filter(restaurant =>
      props.favorites.includes(restaurant.id)
    );
    return (
      <Flickity>
        {favorited.map(restaurant => {
          return <Restaurant fav={true} restaurant={restaurant} />;
        })}
      </Flickity>
    );
  } else {
    return (
      <div className="mh-20 f aic jcc">
        <h1>No Faves Yet!</h1>
      </div>
    );
  }
};

const Favorites = props => {
  console.log('sidebar', props);
  return (
    <div className="fa f fw mw-75">
      <p>Faves:</p>
      <div className="block x">{displayRestaurants(props)}</div>
    </div>
  );
};

function msp(state) {
  return {
    favorites: state.favorites,
    restaurants: state.restaurants
  };
}

function mdp(dispatch) {
  return {
    addFav: id => {
      dispatch({ type: 'ADD_FAV', payload: id });
    },
    remFav: id => {
      dispatch({ type: 'REMOVE_FAV', payload: id });
    }
  };
}

export default connect(
  msp,
  mdp
)(Favorites);
