import React, { Component } from 'react';
import './Player.css';


class Player extends Component {
    render() {
        return (
            <div className='Player'>
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