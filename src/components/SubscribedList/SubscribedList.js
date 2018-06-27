import React, { Component } from 'react';
import './SubscribedList.css';
import Router from '../Router';


class SubscribedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onItemClick: props.onItemClick
        };
    }

    goToAuthorDetailScreen() {
        this.state.onItemClick('podcastDetail');
    }

    render() {
        return (
            <div className='SubscribedList'>
                <div className="horizontalList">
                    <ul>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                        <li onClick={this.goToAuthorDetailScreen.bind(this)}></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SubscribedList;