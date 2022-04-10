import React from 'react';
import SearchBar from './SearchBar';
import useYouTube from '../api/useYouTube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] }

    onSearchSubmit = async searchValue => {

        const response = await useYouTube.get('/search', {
            params: {
                q: searchValue
            }
        });
        this.setState({videos: response.data.items})
    };

    render() {

        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }

}
export default App;