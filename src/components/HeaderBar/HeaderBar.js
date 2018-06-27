import React, { Component } from 'react';
import './HeaderBar.css';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBackButtonActive: props.isBackButtonActive,
            onNavBack: props.onNavBack
        };
    }


    onBackButtonClick() {
        this.state.onNavBack('home');
    }

    render() {
        return (
            <div className='HeaderBar'>
                <div className="backButton" onClick={this.onBackButtonClick.bind(this)}>
                    <i className="material-icons">chevron_left</i>
                </div>
                <span className='screenTitle'>My Subscriptions</span>
                <div className='actionButtons'>
                    <i className="material-icons">search</i>
                    <i className="material-icons">more_vert</i>
                </div>
            </div>
        );
    }
}

export default HeaderBar;