import './VideoItem.css'
import React from 'react';


const VideoItem = ({ video, onSelectVideo }) => {

    return (
        <div className='item video-item' onClick={() => onSelectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} className="ui image"/>
            <div className="content">
                <a className='header'>
                    {video.snippet.title}
                </a>
                <div className='description'>
                    {video.snippet.description}
                </div>
            </div>
        </div>
    )
};
export default VideoItem;
