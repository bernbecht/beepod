import React, { Component } from 'react';
import './HeaderBar.css';


class HeaderBar extends Component {
    render() {
        return (
            <div className='HeaderBar'>
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