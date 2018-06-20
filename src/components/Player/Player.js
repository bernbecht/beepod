import React, { Component } from 'react';
import './Player.css';


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHidden: true,
          panelVisibilityClass: ''
        };
      }
      

    togglePlayerPanel() {
        if(this.state.isHidden) {
            this.setState({isHidden: true});
            this.setState({panelVisibilityClass: ''});            
        }
        else {
            this.setState({isHidden: false});
            this.setState({panelVisibilityClass: 'isHidden'});            
        }
    }

    render() {
        return (
            <div className={`Player ${this.state.panelVisibilityClass}`}>
                <button className="collapsable medium" onClick={this.togglePlayerPanel}><i className="material-icons">expand_more</i></button>
                <div className='trackTextWrapper'>
                    <div className="trackText-title">Jovem Nerd</div>
                    <div className="trackText-subTitle">#104 - Valentine Days for Nerdy People</div>
                </div>
                <div className='audioControlsWrapper'>
                    <div className="audioControls-button small"></div>
                    <div className="audioControls-button big"></div>
                    <div className="audioControls-button small"></div>
                </div>
            </div>
        );
    }
}

export default Player;