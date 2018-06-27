import React, { Component } from 'react';
import './DownloadList.css';


class DownloadList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: !props.isPanelMaxized,
            onCollapsibleBtnClick: props.onCollapsibleBtnClick
        };
      }
      

    render() {

        const data =[
            {"name":"test1"},
            {"name":"test2"},
            {"name":"test1"},
            {"name":"test2"},
            {"name":"test1"},
            {"name":"test2"},
            {"name":"test1"},
            {"name":"test2"},
            {"name":"test1"},
            {"name":"test2"},
            {"name":"test1"},
            {"name":"test2"}];

        return (
            <div className={`DownloadList`}>
                <ul>
                    {data.map(function(d, idx){
                        return (
                            <li className='listItem' key={idx}>
                                <div className="listItemImage">
                                    <img src="https://i.giphy.com/media/sJaZBVqhPnQk0/giphy.webp" alt=""/>
                                </div>
                                <div className="itemTextWrapper">
                                    <div className="listItemTitle">{d.name}</div>
                                    <div className="listItemSubtitle">{d.name}</div>
                                </div>
                                <div className="itemActionButtonsWrapper">
                                    <div className="itemActionMain"></div>
                                    <div className="itemActionSub"></div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default DownloadList;