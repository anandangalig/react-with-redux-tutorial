import React from 'react';

class SearchBar extends React.Component {
    state = {searchTerm: ''};
    
    onInputChange(event) {
        // event object is automatically passed from the onChange callback function
        console.log(event.target.value);
    }   

    render() {
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type = 'text' 
                            value = {this.state.searchTerm}
                            // by routing the input through the state, we are gaining control over the element and the input, so it can be massaged if need be. Otherwise, the code needs to pull it from the DOM
                            onChange = {(event) => this.setState({searchTerm: event.target.value})} 
                            // if onChange={this.onInputChange} is passing that function as reference for the callback, do no include the (). If included, the code will run once during render
                            /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;