import KEY_YOUTUBE_API  from '../apis/youTube';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY_YOUTUBE_API,
        type: 'video'

    }
}

);
