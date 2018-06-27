import React, { Component } from 'react';
import './PlayerBar.css';


class PlayerBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: !props.isPanelMaxized,
            onCollapsibleBtnClick: props.onCollapsibleBtnClick
        };
      }
      

    hidePlayerBar() {
        this.setState({isVisible: false});
    }

    handClickOnCollapsibleBtn() {
        this.hidePlayerBar();
        this.state.onCollapsibleBtnClick();
    }

    render() {
        const visibilityClass = this.props.isPanelMaxized ? 'isHidden' : '';

        return (
            <div className={`PlayerBar`}>
                <div className={`content ${visibilityClass}`}>
                    <div className='playerControlsWrapper'>
                        <div>Skim back</div>
                        <div>Play</div>
                        <div>Skim forward</div>
                    </div>
                    <button className="collapsable medium onRight" onClick={this.handClickOnCollapsibleBtn.bind(this)}>
                        <i className="material-icons">expand_less</i>
                    </button>
                </div>
            </div>
        );
    }
}

export default PlayerBar;