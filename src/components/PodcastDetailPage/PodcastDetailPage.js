import React, { Component } from 'react';
import './PodcastDetailPage.css';


class PodcastDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: props.isActive
        };
    }

    onExit() {
    }

    render() {
        const hiddenClass = this.props.isActive ? '' : 'isHidden';
        return (
            <div className={`PodcastDetailPage ${hiddenClass}`}></div>   
        )
    }
}

export default PodcastDetailPage;
