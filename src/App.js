import React, { Component } from 'react';
import logo from './logo.svg';

import HeaderBar from './components/HeaderBar/HeaderBar';
import SubscribedList from './components/SubscribedList/SubscribedList';
import Player from './components/Player/Player';
import PlayerBar from './components/PlayerBar/PlayerBar';
import DownloadList from './components/DownloadList/DownloadList';
import PodcastDetailPage from './components/PodcastDetailPage/PodcastDetailPage';

import './App.css';
import './components/common/Button/Button.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            isPanelMaxized: false,
            location: 'home'
        };
    }
    
    togglePanelMaxized(event) {
        this.setState({isPanelMaxized: !this.state.isPanelMaxized});
    }

    setLocation(sLocation) {
        this.setState({location: sLocation});
    }

    render() {
        return (
            <div className="App">
                <HeaderBar onNavBack={this.setLocation.bind(this)}/>
                
                <div className="App-content">
                    <SubscribedList onItemClick={this.setLocation.bind(this)}/>
                    <DownloadList />
                </div>
                
                <Player isPanelMaxized={this.state.isPanelMaxized} onMinimizePanel={this.togglePanelMaxized.bind(this)}/>
                
                <PlayerBar isPanelMaxized={this.state.isPanelMaxized} onCollapsibleBtnClick={this.togglePanelMaxized.bind(this)}/>
                
                <PodcastDetailPage isActive={this.state.location == 'podcastDetail' ? true: false} />
            </div>
        );
    }
}

export default App;
