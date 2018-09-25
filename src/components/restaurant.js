import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurant extends Component {
  favorite = (e, id) => {
    if (e.target.className === 'unfav') {
      e.target.className = 'fav';
      this.props.addFav(id);
    } else {
      e.target.className = 'unfav';
      this.props.remFav(id);
    }
  };

  renderFav = () => {
    if (this.props.restaurant.fav) {
      return (
        <span
          className="fav"
          onClick={e => this.favorite(e, this.props.restaurant.id)}
        />
      );
    } else {
      return (
        <span
          className="unfav"
          onClick={e => this.favorite(e, this.props.restaurant.id)}
        />
      );
    }
  };

  render() {
    return (
      <div
        id={this.props.restaurant.id}
        key={this.props.restaurant.id}
        className="gutter card bg-light mb2 __res"
      >
        <div
          className="__res-img"
          style={{
            backgroundImage: 'url(' + this.props.restaurant.image_url + ')'
          }}
        />
        {/* <span
          className="unfav"
          onClick={e => this.favorite(e, this.props.restaurant.id)}
        /> */}
        {this.renderFav()}
        <div className="px05 pb1">
          <p className="s5 b __title">{this.props.restaurant.name}</p>
          <p className="m0">{this.props.restaurant.location.address1}</p>
          <p className="m0">{this.props.restaurant.categories[0].title}</p>
          <p className="inline-block m0">
            {this.props.restaurant.rating}
            /5
          </p>
          {' | '}
          <p className="inline-block m0">{this.props.restaurant.price}</p>
          <a href={'tel:' + this.props.restaurant.phone}>
            <p className="mt0">
              P:
              {this.props.restaurant.display_phone}
            </p>
          </a>
          <a href={this.props.restaurant.url} target="_blank">
            <button>go already</button>
          </a>
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    location: state.location,
    url: state.url
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
)(Restaurant);
