import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInput from './UserInput';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {<UserInput/>}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
const mapStateToProps = (state) => {
  return {  users: this.state.users }
}

export default connect(mapStateToProps)(Users); 
