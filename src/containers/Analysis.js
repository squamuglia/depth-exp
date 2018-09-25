import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Profile from '../components/profile';
import Results from '../components/results';
import Favorites from '../components/favorites';
import { getPersonality } from '../helpers/algo';
import { connect } from 'react-redux';

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  addRestaurants = restaurants => {
    console.log('add restaurants', restaurants);
    if (restaurants.businesses && restaurants.businesses.length) {
      this.props.addRests(restaurants.businesses);
    }
  };

  componentDidMount() {
    const categories = getPersonality(this.props).params;
    const location = this.props.location ? this.props.location : '10001';
    console.log('getPersonality params', categories);
    fetch(this.props.url + '/api/v1/restaurants/filter', {
      method: 'POST',
      body: JSON.stringify({
        location: location,
        categories: categories
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(response => response.json())
      .catch(error => console.error(`Fetch Error =\n`, error))
      .then(r => this.addRestaurants(r));
  }

  navLink = p => {
    this.setState(
      {
        page: p
      },
      () => console.log('subnav', this.state)
    );
  };

  changePage = () => {
    switch (this.state.page) {
      case 1: {
        return (
          <div className="wide-gutter f">
            <Results />
          </div>
        );
      }
      case 2: {
        return (
          <React.Fragment>
            <div className="gutter f fw jcc">
              <div className="fa x m1 card">
                <Profile />
              </div>
            </div>
          </React.Fragment>
        );
      }

      default:
        return (
          <div className="wide-gutter f">
            <Favorites />
          </div>
        );
    }
  };

  reset = () => {
    console.log('boop');
    this.props.resetState();
    this.props.history.push('/');
  };

  render() {
    return (
      <React.Fragment>
        <div className="p05 x f bg-light no-x-overflow">
          <div className="fa ac" onClick={() => this.navLink(1)}>
            Results
          </div>
          <div className="fa ac" onClick={() => this.navLink(2)}>
            Profile
          </div>
          <div className="fa ac" onClick={() => this.navLink(3)}>
            Favorites
          </div>
        </div>
        {this.changePage()}
        <div className="x ac mt1">
          <button onClick={this.reset}>Retake the Assessment</button>
        </div>
      </React.Fragment>
    );
  }
}

function msp(state) {
  return {
    location: state.location,
    url: state.url,
    restaurants: state.restaurants,
    question: state.question,
    subjective: state.subjective,
    inductive: state.inductive,
    objective: state.objective,
    deductive: state.deductive
  };
}

function mdp(dispatch) {
  return {
    updateTrait: (trait, score) => {
      dispatch({ type: 'UPDATE_TRAIT', trait: trait, payload: score });
    },
    addRests: restaurants => {
      dispatch({ type: 'ADD_RESTAURANTS', payload: restaurants });
    },
    resetState: () => {
      dispatch({ type: 'RESET' });
    }
  };
}

export default withRouter(
  connect(
    msp,
    mdp
  )(Analysis)
);
