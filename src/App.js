import React, { Component } from 'react';
import logo from './logo.svg';

import HeaderBar from './components/HeaderBar/HeaderBar';
import SubscribedList from './components/SubscribedList/SubscribedList';
import Player from './components/Player/Player';


import './App.css';
import './components/common/Button/Button.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <div className="App-content">
            <SubscribedList />
        </div>
        <Player />
      </div>
    );
  }
}

export default App;
