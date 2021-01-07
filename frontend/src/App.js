import React, { Component } from 'react';
import './App.css';
import FriendApp from './component/FriendApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FriendApp />
      </div>
    );
  }
}

export default App;