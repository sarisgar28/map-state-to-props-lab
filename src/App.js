import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

 

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.items }
}

export default connect(mapStateToProps)(App); 
