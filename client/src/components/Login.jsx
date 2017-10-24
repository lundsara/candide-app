import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }


  render() {
    return (
      <div className="login">
        <div className="wrapper">
          <h2>Your Account</h2>
          {/* adding ternary operator for login logout */}
          {this.props.user ?
            <button onClick={this.props.logout}>Log Out</button>
            :
            <button onClick={this.props.login}>Log In</button>
          }
        </div>
        {this.props.user ?
          <div>
            {/* show user's photo */}
            <img className="userinfo" src={this.props.user.photoURL} />
          </div>
          :
          <div className="wrapper">
            <p>You must be logged in to see the reviews list and submit to it.</p>
          </div>
        }
      </div>
    );
  }
}
export default Login;
