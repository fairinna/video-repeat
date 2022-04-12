import React from 'react';
import SearchBar from './SearchBar';
import useYouTube from '../api/useYouTube';
import VideoList from './VideoList';
import VideoDetals from './VideoDetals';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    onSearchSubmit = async searchValue => {

        const response = await useYouTube.get('/search', {
            params: {
                q: searchValue
            }
        });
        this.setState({videos: response.data.items})
    };
    onSelectVideo = (selectedVideoItem)=>{
        this.setState({ selectedVideo: selectedVideoItem})
        console.log(selectedVideoItem);
    }

    render() {

        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoDetals selectedVideoItem={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
            </div>
        )
    }

}
export default App;