import React from 'react';

const VideoDetals = ({ selectedVideoItem})=>{
    if (!selectedVideoItem){
        return <div>Loading ...</div>
    }

    return(
        <div>
            {selectedVideoItem.snippet.description}
        </div>


    )
}
export default VideoDetals;