import React from 'react';
import axios from 'axios';
import SearchBar from  './SearchBar';

class App extends React.Component {
    state = {images: [] };

     onSearchSubmit = async (term) => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: {
                    query:  term
                },
                headers: {
                    Authorization: 'Client-ID 4f17c5aeb4deffdec15813bcbb9f668b23fd1ecab448bd54c195d6fa708314e4'
                },
            }
        );
        this.setState({images: response.data.results}); // if not bound, this will be the props object
        
    }

    render() { 
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}
export default App;