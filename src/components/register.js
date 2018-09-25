import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {
  state = {
    bio: '',
    username: '',
    password: ''
  };

  handleRegistration = state => {
    //Register User
    fetch(this.props.url + '/api/v1/users', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        username: state.username,
        password: state.password
      })
    })
      .then(response => response.json())
      //this catch doesn't even work but let's leave it here for fun
      .catch(error => console.log(`Registration Error =`, error))
      .then(json => {
        if (json.token) {
          //Close Form
          this.props.toggle('register');
          //add token to local storage
          localStorage.setItem('token', json.token);
          //add to login global state
          this.props.logIn({
            token: json.token,
            username: json.user_details.username,
            userid: json.user_details.id,
            display_value: json.user_details.username,
            logged_in: true
          });
        } else {
          window.alert('Registration Failed');
        }
      });
  };

  handleBioChange = event => {
    this.setState({
      bio: event.target.value
    });
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSingleChange = event => {
    console.log(event.target.checked);
    this.setState({
      single: event.target.checked
    });
  };

  render() {
    if (this.props.show) {
      return (
        <div className="yview xview f aic jcc abs z10">
          <div className="mw-1 fa mxa z8 bg-white p1">
            <p className="s4">Register</p>
            <label>Username:</label>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <label>Password:</label>
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <button
              value="Submit"
              onClick={() => this.handleRegistration(this.state)}
            >
              Submit
            </button>
          </div>
          <div
            className="fill abs z7 bg-black o-4"
            onClick={() => this.props.toggle('register')}
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
)(Register);
