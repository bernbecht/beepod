import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
      </div>
    );
  }
}

export default App;
