import React, { Component } from 'react';
import logo from './logo.svg';

import HeaderBar from './components/HeaderBar/HeaderBar';
import SubscribedList from './components/SubscribedList/SubscribedList';
import Player from './components/Player/Player';
import PlayerBar from './components/PlayerBar/PlayerBar';


import './App.css';
import './components/common/Button/Button.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            isPanelMaxized: true
        };
      }
    
    togglePanelMaxized(event) {
        console.log('oi');
        this.setState({isPanelMaxized: !this.state.isPanelMaxized});
    }

    handleChange() {
        console.log('changed');
    }

    render() {
        return (
            <div className="App" onChange={this.handleChange}>
                <HeaderBar />
                <div className="App-content">
                    <SubscribedList />
                </div>
                <Player isPanelMaxized={this.state.isPanelMaxized} onMinimizePanel={this.togglePanelMaxized.bind(this)}/>
                <PlayerBar isPanelMaxized={this.state.isPanelMaxized} onCollapsibleBtnClick={this.togglePanelMaxized.bind(this)}/>
            </div>
        );
    }
}

export default App;
