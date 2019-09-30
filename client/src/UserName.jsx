import React, { Component } from 'react';
import './UserName.css'

class UserName extends Component {
  render() {
    console.log('UserName - this.props.userName', this.props.userName)
    return (
      <div className="UserName">
        <div className="user-name-label">Set user name:</div>
        <input onChange={this.props.onChangeName} type="text" value={this.props.userName}/>
      </div>
    );
  }
}

export default UserName;
