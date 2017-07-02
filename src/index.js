// import libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCspAV3d_9KeEervlaEpRoPUVg2pY7s8Go';



// Create a new component. This component should produce
// some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

        // // youtube search function calling the youtube API
        // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //     this.setState({ 
        //         videos: videos,
        //         selectedVideo: videos[0]
        //     });
        // })

        // // youtube search function calling the youtube API
        // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //     this.setState({ videos }); 
        //     // property and value has a same name
        //     // this.setState({ videos: videos });
        // })
    };

    videoSearch(term) {
        // youtube search function calling the youtube API
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
            // search without debouncing
            // <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        );
    };
    
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));



// // youtube search function calling the youtube API
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//     console.log(data);
// })

// // Create a new component. This component should produce
// // some HTML
// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// }


// // Take this component's generated HTML and put it
// // on the page (in the DOM)
// ReactDOM.render(<App />, document.querySelector('.container'));