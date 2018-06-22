import React, { Component } from 'react';
import './Player.css';


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isVisible: props.isPanelMaxized,
          onMinimizePanel: props.onMinimizePanel
        };
      }
      
    minimizePanel() {
        this.setState({isVisible: !this.state.isVisible});
        this.state.onMinimizePanel();
    }

    render() {
        const visibilityClass = this.props.isPanelMaxized ? '' : 'isHidden';
        this.state.isVisible = !this.props.isPanelMaxized;

        return (
            <div className={`Player ${visibilityClass}`}>
                <button className="collapsable medium" onClick={this.minimizePanel.bind(this)}>
                    <i className="material-icons">expand_more</i>
                </button>
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