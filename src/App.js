import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Nav from './components/nav';
import Form from './containers/Form';
import Analysis from './containers/Analysis';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import './index.css';

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      fetch(this.props.url + '/api/v1/trytoken', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(json =>
          this.setState({
            token: json.token,
            username: json.user_details.username,
            bio: json.user_details.bio,
            userid: json.user_details.id,
            display_value: json.user_details.username,
            logged_in: true
          })
        );
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Route
            exact
            path="/"
            component={() =>
              this.props.question > 8 ? <Redirect to="/analysis" /> : <Form />
            }
          />
          <Route exact path="/analysis" component={() => <Analysis />} />
          <div className="fix bottom left m1">
            <a
              href="https://github.com/squamuglia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="broken heart">
                💔
              </span>
              Max
            </a>
          </div>
        </React.Fragment>
      </Router>
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
    updateTrait: (trait, state) => {
      dispatch({ type: 'UPDATE_TRAIT', trait: trait, payload: state });
    }
  };
}

export default hot(module)(
  connect(
    msp,
    mdp
  )(App)
);
