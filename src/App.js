import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import SubscribedList from './components/SubscribedList/SubscribedList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <SubscribedList />
      </div>
    );
  }
}

export default App;
