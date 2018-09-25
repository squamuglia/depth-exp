import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogOut extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.logIn({
      token: '',
      display_value: '',
      username: '',
      logged_in: false,
      userid: null
    });
    this.props.toggle('logout');
  };

  render() {
    if (this.props.show) {
      return (
        <div className="yview xview f aic jcc abs z10">
          <div className="mw-1 fa mxa z8 bg-white p1">
            <p className="s4">Are you sure you want to end our session?</p>
            <button onClick={this.handleLogout}>Log Out</button>
          </div>
          <div
            className="fill abs z7 bg-black o-4"
            onClick={() => this.props.toggle('logout')}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

function msp(state) {
  return {
    url: state.url,
    auth: state.auth
  };
}

function mdp(dispatch) {
  return {
    logIn: state => {
      dispatch({ type: 'LOG_IN', payload: state });
    }
  };
}

export default connect(
  msp,
  mdp
)(LogOut);
