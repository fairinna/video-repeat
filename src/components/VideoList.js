import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {

    const videoItemList = videos.map((video) => {

        return <VideoItem video={video} key={video.id.videoId} onSelectVideo={onSelectVideo}/>
    });

    return (
        <div>
            We have {videos.length} videos.
            <div className="ui relaxed list">

            {videoItemList}
            </div>
        </div>
    )
};
export default VideoList;