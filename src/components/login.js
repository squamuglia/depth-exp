import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleLogin = state => {
    fetch(this.props.url + '/api/v1/login', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        username: state.username,
        password: state.password
      })
    })
      .then(response => response.json())
      .catch(error => console.log(`Login Error =`, error))
      .then(json => {
        if (json.username) {
          this.props.toggle('login');
          localStorage.setItem('token', json.token);
          this.props.logIn({
            token: json.token,
            username: json.user_details.username,
            userid: json.user_details.id,
            display_value: json.user_details.username,
            logged_in: true
          });
        } else {
          window.alert('User not found :(');
        }
      });
  };

  handleUsernameInput = event => {
    this.setState({
      ...this.state,
      username: event.target.value
    });
  };

  handlePasswordInput = event => {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  };

  render() {
    if (this.props.show) {
      return (
        <div className="yview xview f aic jcc abs z10 fade">
          <div className="mw-1 fa mxa z8 bg-white p1">
            <p className="s4">Login</p>
            <label>
              username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameInput}
              />
            </label>
            <label>
              password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordInput}
              />
            </label>
            <button value="Submit" onClick={() => this.handleLogin(this.state)}>
              Submit
            </button>
          </div>
          <div
            className="fill abs z7 bg-black o-4"
            onClick={() => this.props.toggle('login')}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const msp = state => {
  return {
    url: state.url,
    auth: state.auth
  };
};

const mdp = dispatch => {
  return {
    logIn: state => {
      dispatch({ type: 'LOG_IN', payload: state });
    }
  };
};

export default connect(
  msp,
  mdp
)(Login);
